const { Router } = require("express");
const { Op } = require("sequelize");
require("dotenv").config();
const router = Router();

const axios = require("axios");

const { Recipe } = require("../db");
const { v4: uuidv4 } = require("uuid");
const { API_KEY } = process.env;
const { FOOD_GET_ALL } = require("../utils/constants");

// ----------------------------------------------------------------------------
// GET: Obtener un listado de las recetas que contengan la palabra ingresada como query parameter
// Si no existe ninguna receta mostrar un mensaje adecuado
// ----------------------------------------------------------------------------

router.get("/", async (req, res, next) => {
  const { name } = req.query;

  let recipesAllApi = [];
  try {
    // console.log(`${FOOD_GET_ALL}&apiKey=${API_KEY}`);
    recipesAllApi = await axios.get(`${FOOD_GET_ALL}&apiKey=${API_KEY}`);
    recipesAllApi = recipesAllApi.data.results;
    let vegetarian = [];
    recipesAllApi = recipesAllApi.map((recipe) => {
      if (recipe.vegetarian) {
        vegetarian = [...recipe.diets, "vegetarian"];
      } else {
        vegetarian = recipe.diets;
      }
      return {
        id: recipe.id,
        name: recipe.title,
        summary: recipe.summary,
        dishTypes: recipe.dishTypes,
        diets: vegetarian,
        spoonacularScore: recipe.spoonacularScore,
        healthScore: recipe.healthScore,
        steps: recipe.analyzedInstructions[0],
        image: recipe.image,
      };
    });
  } catch (error) {
    next(error);
  }
  if (name) {
    try {
      let recipesFilterBD = await Recipe.findAll({
        where: { name: { [Op.like]: `%${name}%` } },
      });

      recipesFilterApi = recipesAllApi.filter((recipe) => {
        return recipe.name.toUpperCase().includes(name.toUpperCase());
      });

      if (recipesFilterApi.length > 0 || recipesFilterBD.length > 0) {
        let recipesFilterAll = recipesFilterBD.concat(recipesFilterApi);
        res.status(200).json(recipesFilterAll);
      } else {
        res.status(400).json("No existe una receta que contenga esa palabra");
      }
    } catch (error) {
      next(error);
    }
  } else {
    try {
      //Recetas consumidas desde la BD
      let recipesAllBD = await Recipe.findAll();
      recipesAllBD = recipesAllBD.map((recipe) => {
        return {
          id: recipe.id,
          name: recipe.name,
          summary: recipe.summary,
          dishTypes: recipe.dishTypes,
          diets: recipe.diets,
          spoonacularScore: recipe.spoonacularScore,
          healthScore: recipe.healthScore,
          steps: recipe.steps,
          image: recipe.image,
        };
      });
      allRecipes = recipesAllApi.concat(recipesAllBD);
      res.status(200).json(allRecipes);
    } catch (error) {
      next(error);
    }
  }
});

// ----------------------------------------------------------------------------
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de recetas por body
// Crea una receta en la base de datos
// ----------------------------------------------------------------------------
router.post("/", async (req, res, next) => {
  const {
    name,
    summary,
    dishTypes,
    diets,
    spoonacularScore,
    healthScore,
    steps,
    image,
  } = req.body;

  if (name && summary) {
    try {
      let newRecipe = await Recipe.create({
        id: uuidv4(),
        name,
        summary,
        dishTypes,
        diets,
        spoonacularScore,
        healthScore,
        steps,
        image,
      });
      newRecipe = {
        name: newRecipe.name,
        summary: newRecipe.summary,
        id: newRecipe.id,
        dishTypes: newRecipe.dishTypes,
        diets: newRecipe.diets,
        spoonacularScore: newRecipe.spoonacularScore,
        healthScore: newRecipe.healthScore,
        steps: newRecipe.steps,
        image: newRecipe.image,
      };
      res.json(newRecipe);
    } catch (error) {
      next(error);
    }
  } else {
    res.status(400).json("Faltan datos");
  }
});

// ----------------------------------------------------------------------------
// Obtener el detalle de una receta en particular
// Debe traer solo los datos pedidos en la ruta de detalle de receta
// Incluir los tipos de dieta asociados
// ----------------------------------------------------------------------------

router.get("/:idReceta", async (req, res, next) => {
  const { idReceta } = req.params;
  try {
    // console.log(
    //   `https://api.spoonacular.com/recipes/${idReceta}/information?apiKey=${API_KEY}`
    // );
    let recipeById = await axios.get(
      `https://api.spoonacular.com/recipes/${idReceta}/information?apiKey=${API_KEY}`
    );
    recipeById = recipeById.data;

    let vegetarian = [];

    if (recipeById.vegetarian) {
      vegetarian = [...recipeById.diets, "vegetarian"];
    } else {
      vegetarian = recipeById.diets;
    }

    recipeById = {
      name: recipeById.title,
      summary: recipeById.summary,
      id: recipeById.id,
      dishTypes: recipeById.dishTypes,
      diets: vegetarian,
      spoonacularScore: recipeById.spoonacularScore,
      healthScore: recipeById.healthScore,
      steps: recipeById.steps,
      image: recipeById.image,
    };

    res.status(200).json(recipeById);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
