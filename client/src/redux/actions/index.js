import axios from "axios";
import { RECIPES_URL, TYPES_URL, ID_URL } from "../../utils/constants";

import {
  GET_RECIPES,
  GET_NAME_RECIPES,
  GET_TYPES,
  FILTER_BY_TYPE,
  ORDER_RECIPES,
  GET_ID_RECIPES,
} from "./constants";

export function getAllRecipes() {
  return function (dispatch) {
    return axios
      .get(RECIPES_URL)
      .then((recipes) => {
        dispatch({
          type: GET_RECIPES,
          payload: recipes.data,
        });
      })
      .catch((error) => console.log(error));
  };
}
export function getNameRecipes(name) {
  return function (dispatch) {
    return axios
      .get(`${RECIPES_URL}${name}`)
      .then((recipes) => {
        dispatch({
          type: GET_NAME_RECIPES,
          payload: recipes.data,
        });
      })
      .catch((error) => console.log(error));
  };
}
export function getTypes() {
  return function (dispatch) {
    return axios
      .get(TYPES_URL)
      .then((types) => {
        dispatch({
          type: GET_TYPES,
          payload: types.data,
        });
      })
      .catch((error) => console.log(error));
  };
}

export function filterByType(diet) {
  return {
    type: FILTER_BY_TYPE,
    payload: diet,
  };
}
export function orderRecipes(order) {
  return {
    type: ORDER_RECIPES,
    payload: order,
  };
}

export function getIdRecipe(id) {
  return function (dispatch) {
    return axios
      .get(`${ID_URL}${id}`)
      .then((types) => {
        dispatch({
          type: GET_ID_RECIPES,
          payload: types.data,
        });
      })
      .catch((error) => console.log(error));
  };
}
