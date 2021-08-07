import { GET_ALL_RECIPES } from "../actions/constants";

var initialState = {
  recipes: [],
};

function reducer(state = initialState, action) {
  //un switch con nuestras acciones posibles

  const { type, payload } = action;

  switch (type) {
    case GET_ALL_RECIPES:
      return {
        ...state,
        recipes: payload,
      };
    default:
      return state;
  }
}
export default reducer;
