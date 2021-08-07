import { GET_RECIPES, GET_NAME_RECIPES } from "../actions/constants";

var initialState = {
  recipes: [],
  recipesSearch: [],
};

function reducer(state = initialState, action) {
  //un switch con nuestras acciones posibles

  const { type, payload } = action;

  switch (type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: payload,
      };
    case GET_NAME_RECIPES:
      console.log("estoy en el reducer");
      return {
        ...state,
        recipesSearch: payload,
      };
    default:
      return state;
  }
}
export default reducer;
