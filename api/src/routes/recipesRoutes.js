require("dotenv").config();
const { Router } = require("express");
const router = Router();
const axios = require("axios");
const { Op } = require("sequelize");

const { v4: uuidv4 } = require("uuid");
const isUUID = require("is-uuid");

const { Recipe, Diet } = require("../db");
const { API_KEY } = process.env;
const { FOOD_GET_ALL } = require("../utils/constants");

// ----------------------------------------------------------------------------
// GET: Obtener un listado de las recetas que contengan la palabra ingresada como query parameter
// Si no existe ninguna receta mostrar un mensaje adecuado
// ----------------------------------------------------------------------------

router.get("/", async (req, res, next) => {
  const { name } = req.query;

  let recipesAllApi = [];
  let recipesAllBD = [];
  try {
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
        summary: recipe.summary.replace(/<[^>]*>/g, ""),
        dishTypes: recipe.dishTypes,
        diets: vegetarian,
        spoonacularScore: recipe.spoonacularScore,
        healthScore: recipe.healthScore,
        steps: recipe.analyzedInstructions[0],
        image: recipe.image,
      };
    });

    recipesAllBD = await Recipe.findAll();
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
  } catch (error) {
    next(error);
  }
  if (name) {
    try {
      let recipesFilterBD = await recipesAllBD.filter((recipe) =>
        recipe.name.toUpperCase().includes(name.toUpperCase())
      );

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
    allRecipes = recipesAllApi.concat(recipesAllBD);
    res.status(200).json(allRecipes);
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
    if (isUUID.v4(idReceta)) {
      let recipesFilterBD = await Recipe.findByPk(idReceta, {
        include: Diet,
      });

      recipesFilterBD = {
        name: recipesFilterBD.name,
        summary: recipesFilterBD.summary,
        id: recipesFilterBD.id,
        dishTypes: recipesFilterBD.dishTypes,
        spoonacularScore: recipesFilterBD.spoonacularScore,
        healthScore: recipesFilterBD.healthScore,
        steps: recipesFilterBD.steps,
        image: recipesFilterBD.image,
        diets: recipesFilterBD.Diets.map((diet) => {
          return diet.name;
        }),
      };

      res.status(200).json(recipesFilterBD);
    } else {
      let recipeByIdApi = await axios.get(
        `https://api.spoonacular.com/recipes/${idReceta}/information?apiKey=${API_KEY}`
      );
      recipeByIdApi = recipeByIdApi.data;
      let vegetarian = [];
      if (recipeByIdApi.vegetarian) {
        vegetarian = [...recipeByIdApi.diets, "vegetarian"];
      } else {
        vegetarian = recipeByIdApi.diets;
      }
      recipeByIdApi = {
        name: recipeByIdApi.title,
        summary: recipeByIdApi.summary.replace(/<[^>]*>/g, ""),
        id: recipeByIdApi.id,
        dishTypes: recipeByIdApi.dishTypes,
        diets: vegetarian,
        spoonacularScore: recipeByIdApi.spoonacularScore,
        healthScore: recipeByIdApi.healthScore,
        steps: recipeByIdApi.steps,
        image: recipeByIdApi.image,
      };

      res.status(200).json(recipeByIdApi);
    }
  } catch (error) {
    next(error);
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
    spoonacularScore,
    healthScore,
    steps,
    image,
    diets,
  } = req.body;

  if (name && summary) {
    try {
      let newRecipe = await Recipe.create({
        id: uuidv4(),
        name,
        summary,
        dishTypes,
        spoonacularScore,
        healthScore,
        steps,
        image,
      });

      newRecipe = await newRecipe.addDiets(diets);
      res.status(200).send(newRecipe);
    } catch (error) {
      next(error);
    }
  } else {
    res.status(400).json("Faltan datos");
  }
});

module.exports = router;
