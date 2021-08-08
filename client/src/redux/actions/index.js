import axios from "axios";
import { RECIPES_RECIPE_URL } from "../../utils/constants";
import { GET_RECIPES, GET_NAME_RECIPES, SEARCH_BY_NAME } from "./constants";

export function getAllRecipes() {
  return function (dispatch) {
    return axios.get(RECIPES_RECIPE_URL).then((recipes) => {
      dispatch({
        type: GET_RECIPES,
        payload: recipes.data,
      });
    });
  };
}
export function getNameRecipes(name) {
  return function (dispatch) {
    return axios.get(`${RECIPES_RECIPE_URL}${name}`).then((recipes) => {
      dispatch({
        type: GET_NAME_RECIPES,
        payload: recipes.data,
      });
    });
  };
}

export function filterByName(name) {
  console.log("actions", name);
  return {
    type: SEARCH_BY_NAME,
    payload: name,
  };
}
