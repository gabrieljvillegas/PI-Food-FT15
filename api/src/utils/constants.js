const FOOD_URL = "https://api.spoonacular.com";
const FOOD_GET_ALL =
  "https://api.spoonacular.com/recipes/complexSearch?number=10&addRecipeInformation=true";
const FOOD_GET_NAME =
  "https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&query="; //Concatenar con req.query.query
const FOOD_GET_ID = "https://api.spoonacular.com/recipes/${id}/information";

module.exports = {
  FOOD_URL,
  FOOD_GET_ALL,
  FOOD_GET_NAME,
  FOOD_GET_ID,
};
