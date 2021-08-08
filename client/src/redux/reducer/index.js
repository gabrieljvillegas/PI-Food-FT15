import {
  GET_RECIPES,
  GET_NAME_RECIPES,
  CHANGE_FLAG,
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
    case CHANGE_FLAG:
      return {
        ...state,
        recipesFlag: payload,
      };

    default:
      return state;
  }
}
export default reducer;
