import axios from "axios";
import { RECIPES_ALL_URL, RECIPES_NAME_URL } from "../../utils/constants";
import { GET_ALL_RECIPES, GET_NAME_RECIPES } from "./constants";

export function getAllRecipes() {
  return function (dispatch) {
    return axios.get(RECIPES_ALL_URL).then((recipes) => {
      dispatch({
        type: GET_ALL_RECIPES,
        payload: recipes.data,
      });
    });
  };
}
export function getNameRecipes(name) {
  return function (dispatch) {
    return axios.get(`${RECIPES_NAME_URL}${name}`).then((recipes) => {
      dispatch({
        type: GET_ALL_RECIPES,
        payload: recipes.data,
      });
    });
  };
}
