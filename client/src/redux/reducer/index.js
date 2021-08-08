import {
  GET_RECIPES,
  GET_NAME_RECIPES,
  SEARCH_BY_NAME,
} from "../actions/constants";

var initialState = {
  recipes: [],
  recipesSearch: [],
  recipesFlag: "",
};

function reducer(state = initialState, action) {
  //un switch con nuestras acciones posibles

  const { type, payload } = action;
  console.log("desde el reducer el type es:", type);
  console.log(state.recipes);
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
      return {
        ...state,
        recipesSearch: recipesSearchNow,
      };

    default:
      return state;
  }
}
export default reducer;
