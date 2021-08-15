import {
  GET_RECIPES,
  GET_NAME_RECIPES,
  GET_TYPES,
  FILTER_BY_TYPE,
  ORDER_RECIPES,
  GET_ID_RECIPES,
} from "../actions/constants";

var initialState = {
  recipes: [],
  recipesSearch: [],
  recipesFlag: "",
  types: [],
  recipeDetail: {},
};

function reducer(state = initialState, action) {
  //un switch con nuestras acciones posibles

  const { type, payload } = action;
  switch (type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: payload,
        recipesSearch: payload,
      };
    case GET_NAME_RECIPES:
      return {
        ...state,
        recipesSearch: payload,
      };

    case GET_TYPES:
      return {
        ...state,
        types: payload,
      };
    case FILTER_BY_TYPE:
      let filterByType = state.recipesSearch.filter((recipe) => {
        let flag = false;
        let count = 0;
        recipe.diets.forEach((diet) => {
          for (let i = 0; i < payload.length; i++) {
            if (payload[i] === diet) {
              count++;
            }
            if (count === payload.length) flag = true;
          }
        });
        return flag === true;
      });

      console.log("fbt", filterByType);

      if (!filterByType.length) {
        filterByType = state.recipes;
      }
      console.log("fbt post if", filterByType);
      return {
        ...state,
        recipesSearch: filterByType,
      };

    case ORDER_RECIPES:
      let orderRecipes = state.recipesSearch.sort((a, b) => {
        switch (payload) {
          case "A-Z":
            if (a.name > b.name) {
              return 1;
            } else {
              return -1;
            }
          case "Z-A":
            if (a.name < b.name) {
              return 1;
            } else {
              return -1;
            }
          case "ScoreDown":
            if (a.spoonacularScore < b.spoonacularScore) {
              return 1;
            } else {
              return -1;
            }
          case "ScoreUp":
            if (a.spoonacularScore > b.spoonacularScore) {
              return 1;
            } else {
              return -1;
            }
          default:
            return state.recipesSearch;
        }
      });

      const newArray = orderRecipes.map((recipe) => recipe);
      return {
        ...state,
        recipesSearch: newArray,
      };

    case GET_ID_RECIPES:
      return {
        ...state,
        recipeDetail: payload,
      };
    default:
      return state;
  }
}
export default reducer;
