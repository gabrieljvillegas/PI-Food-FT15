const { Router } = require("express");
require("dotenv").config();
const router = Router();

const axios = require("axios");

const { Recipe } = require("../db");
const { v4: uuidv4 } = require("uuid");
const { API_KEY } = process.env;
const { FOOD_GET_NAME, FOOD_GET_ALL } = require("../utils/constants");

//  GET: Obtener un listado de las recetas que contengan la palabra ingresada como query parameter
// Si no existe ninguna receta mostrar un mensaje adecuado

router.get("/", async (req, res, next) => {
  const { name } = req.query;
  // console.log(`${FOOD_GET_NAME}${name}&apiKey=${API_KEY}`);

  if (name) {
    try {
      let recipe = await axios.get(`${FOOD_GET_NAME}${name}&apiKey=${API_KEY}`);
      recipe = recipe.data.results;

      if (recipe.length > 0) {
        res.status(200).json(recipe);
      } else {
        res.status(400).json("No existe una receta que contenga esa palabra");
      }
    } catch (error) {
      next(error);
    }
  } else {
    try {
      //Recetas consumidas desde la API (10 recetas)
      let recipesAllApi = await axios.get(`${FOOD_GET_ALL}&apiKey=${API_KEY}`);
      // console.log(`${FOOD_GET_ALL}&apiKey=${API_KEY}`);
      recipesAllApi = recipesAllApi.data.results;
      recipesAllApi = recipesAllApi.map((recipe) => {
        return {
          id: recipe.id,
          name: recipe.name,
          summary: recipe.summary,
          dishTypes: recipe.dishTypes,
          diets: recipe.diets,
          spoonacularScore: recipe.spoonacularScore,
          healthScore: recipe.healthScore,
          steps: recipe.analyzedInstructions[0],
          image: recipe.image,
        };
      });

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
      console.log(recipesAllBD);

      allRecipes = recipesAllApi.concat(recipesAllBD);
      res.status(200).json(allRecipes);
    } catch (error) {
      next(error);
    }
  }
});

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
      console.log(name, summary);

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

router.get("/recipes/:idReceta", async (req, res, next) => {
  res.sendStatus(200);
});

module.exports = router;
