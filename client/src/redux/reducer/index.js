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
  recipesSearchByName: [],
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
        recipesSearch: [],
      };
    case GET_NAME_RECIPES:
      return {
        ...state,
        recipesSearchByName: payload,
        recipesSearch: payload,
      };

    case GET_TYPES:
      return {
        ...state,
        types: payload,
      };
    case FILTER_BY_TYPE:
      let filterByType;
      function filterF(recipesToFilter) {
        if (payload.length) {
          filterByType = recipesToFilter.filter((recipe) => {
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
        } else {
          filterByType = recipesToFilter;
        }
      }

      if (
        state.recipesSearchByName.length &&
        typeof state.recipesSearchByName !== "string"
      ) {
        filterF(state.recipesSearchByName);
        if (!filterByType.length) {
          filterByType = "No hay recetas";
        }
      } else {
        filterF(state.recipes);
      }
      if (!filterByType.length && payload.length) {
        filterByType = "No hay recetas";
      }
      return {
        ...state,
        recipesSearch: filterByType,
      };

    case ORDER_RECIPES:
      let orderRecipes;
      function orderF(recipesToFilter, value) {
        orderRecipes = recipesToFilter.sort((a, b) => {
          switch (value) {
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
              return recipesToFilter;
          }
        });
      }
      if (state.recipesSearch.length) {
        orderF(state.recipesSearch, payload);
      } else {
        orderF(state.recipes, payload);
      }

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
