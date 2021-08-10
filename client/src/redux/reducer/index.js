import {
  GET_RECIPES,
  GET_NAME_RECIPES,
  SEARCH_BY_NAME,
  GET_TYPES,
} from "../actions/constants";

var initialState = {
  recipes: [],
  recipesSearch: [],
  recipesFlag: "",
  types: [],
};

function reducer(state = initialState, action) {
  //un switch con nuestras acciones posibles

  const { type, payload } = action;
  console.log("desde el reducer el type es:", type);
  console.log("payload", payload);
  switch (type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: payload,
      };
    case GET_NAME_RECIPES:
      return {
        ...state,
        recipesSearch: payload,
        recipesFlag: true,
      };

    case SEARCH_BY_NAME:
      let recipesSearchNow = state.recipes.filter((recipe) => {
        return recipe.name.toUpperCase().includes(payload.toUpperCase());
      });
      if (payload === "") {
        return {
          ...state,
          recipesSearch: [],
        };
      }
      return {
        ...state,
        recipesSearch: recipesSearchNow,
      };
    case GET_TYPES:
      console.log("tipos?", payload);
      return {
        ...state,
        types: payload,
      };

    default:
      return state;
  }
}
export default reducer;
