import axios from "axios";
import { RECIPES_URL, TYPES_URL } from "../../utils/constants";
import {
  GET_RECIPES,
  GET_NAME_RECIPES,
  SEARCH_BY_NAME,
  GET_TYPES,
} from "./constants";

export function getAllRecipes() {
  return function (dispatch) {
    return axios.get(RECIPES_URL).then((recipes) => {
      dispatch({
        type: GET_RECIPES,
        payload: recipes.data,
      });
    });
  };
}
export function getNameRecipes(name) {
  return function (dispatch) {
    return axios.get(`${RECIPES_URL}${name}`).then((recipes) => {
      dispatch({
        type: GET_NAME_RECIPES,
        payload: recipes.data,
      });
    });
  };
}
export function getTypes() {
  console.log("estoy en getTypes");
  console.log(TYPES_URL);
  return function (dispatch) {
    return axios.get(TYPES_URL).then((types) => {
      console.log(types);
      dispatch({
        type: GET_TYPES,
        payload: types.data,
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
