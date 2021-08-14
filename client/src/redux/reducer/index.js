import {
  GET_RECIPES,
  GET_NAME_RECIPES,
  GET_TYPES,
  FILTER_BY_TYPE,
  ORDER_RECIPES,
  GET_ID_RECIPES,
} from "../actions/constants";

// const recipes2 = [
//   {
//     id: "1",
//     name: "Cauliflower, Brown Rice, and Vegetable Fried Rice ",
//     summary: "ajsduasdbiabsdiuabsiduabsudi",
//     image: "https://spoonacular.com/recipeImages/716426-312x231.jpg",
//     diets: ["vegan", "vegetarian"],
//   },
//   {
//     id: "2",
//     name: "Homemade Garlic and Basil French Fries",
//     summary: "ajsduasdbiabsdiuabsiduabsudi",
//     image: "https://spoonacular.com/recipeImages/715594-312x231.jpg",
//     diets: ["dairy free", "lacto ovo vegetarian", "vegan"],
//   },
//   {
//     name: "hola",
//     summary: "ajsduasdbiabsdiuabsiduabsudi",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeSzuQNFNwZHJmfbf2YqXKaA5v7mZ0XupANw&usqp=CAU",
//     diets: ["vegan", "vegetarian"],
//   },
//   {
//     name: "Berry Banana Breakfast Smoothie",
//     summary: "ajsduasdbiabsdiuabsiduabsudi",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeSzuQNFNwZHJmfbf2YqXKaA5v7mZ0XupANw&usqp=CAU",
//     diets: ["vegan", "vegetarian"],
//   },
//   {
//     name: "Garlicky Kale",
//     summary: "ajsduasdbiabsdiuabsiduabsudi",
//     image: "https://spoonacular.com/recipeImages/644387-312x231.jpg",
//     diets: ["vegan", "vegetarian"],
//   },
//   {
//     name: "Chicken Tortilla Soup (Slow Cooker)",
//     summary: "ajsduasdbiabsdiuabsiduabsudi",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeSzuQNFNwZHJmfbf2YqXKaA5v7mZ0XupANw&usqp=CAU",
//     diets: ["vegan", "vegetarian"],
//   },
//   {
//     name: "African Chicken Peanut Stew",
//     summary: "ajsduasdbiabsdiuabsiduabsudi",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeSzuQNFNwZHJmfbf2YqXKaA5v7mZ0XupANw&usqp=CAU",
//     diets: ["vegan", "vegetarian"],
//   },
//   {
//     name: "Nigerian Snail Stew",
//     summary: "ajsduasdbiabsdiuabsiduabsudi",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeSzuQNFNwZHJmfbf2YqXKaA5v7mZ0XupANw&usqp=CAU",
//     diets: ["vegan", "vegetarian"],
//   },
//   {
//     name: "Red Kidney Bean Jambalaya",
//     summary: "ajsduasdbiabsdiuabsiduabsudi",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeSzuQNFNwZHJmfbf2YqXKaA5v7mZ0XupANw&usqp=CAU",
//     diets: ["vegan", "vegetarian"],
//   },
//   {
//     name: "Homemade Garlic and Basil French Fries",
//     summary: "ajsduasdbiabsdiuabsiduabsudi",
//     image: "https://spoonacular.com/recipeImages/715594-312x231.jpg",
//     diets: ["dairy free", "lacto ovo vegetarian", "vegan"],
//   },
//   {
//     name: "hola",
//     summary: "ajsduasdbiabsdiuabsiduabsudi",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeSzuQNFNwZHJmfbf2YqXKaA5v7mZ0XupANw&usqp=CAU",
//     diets: ["vegan", "vegetarian"],
//   },
//   {
//     name: "Berry Banana Breakfast Smoothie",
//     summary: "ajsduasdbiabsdiuabsiduabsudi",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeSzuQNFNwZHJmfbf2YqXKaA5v7mZ0XupANw&usqp=CAU",
//     diets: ["vegan", "whole30"],
//   },
//   {
//     name: "Garlicky Kale",
//     summary: "ajsduasdbiabsdiuabsiduabsudi",
//     image: "https://spoonacular.com/recipeImages/644387-312x231.jpg",
//     diets: ["whole30", "vegetarian"],
//   },
//   {
//     name: "Chicken Tortilla Soup (Slow Cooker)",
//     summary: "ajsduasdbiabsdiuabsiduabsudi",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeSzuQNFNwZHJmfbf2YqXKaA5v7mZ0XupANw&usqp=CAU",
//     diets: ["primal", "vegetarian"],
//   },
//   {
//     name: "African Chicken Peanut Stew",
//     summary: "ajsduasdbiabsdiuabsiduabsudi",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeSzuQNFNwZHJmfbf2YqXKaA5v7mZ0XupANw&usqp=CAU",
//     diets: ["vegan", "vegetarian"],
//   },
//   // {
//   //     name: "Nigerian Snail Stew",
//   //     summary: "ajsduasdbiabsdiuabsiduabsudi",
//   //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeSzuQNFNwZHJmfbf2YqXKaA5v7mZ0XupANw&usqp=CAU",
//   //     diets: ["vegan", "vegetarian"],
//   // },
//   // {
//   //     name: "Red Kidney Bean Jambalaya",
//   //     summary: "ajsduasdbiabsdiuabsiduabsudi",
//   //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeSzuQNFNwZHJmfbf2YqXKaA5v7mZ0XupANw&usqp=CAU",
//   //     diets: ["vegan", "vegetarian"],
//   // },
//   // {
//   //     name: "Homemade Garlic and Basil French Fries",
//   //     summary: "ajsduasdbiabsdiuabsiduabsudi",
//   //     image: "https://spoonacular.com/recipeImages/715594-312x231.jpg",
//   //     diets: ["dairy free",
//   //         "lacto ovo vegetarian",
//   //         "vegan"
//   //     ],
//   // },
//   // {
//   //     name: "hola",
//   //     summary: "ajsduasdbiabsdiuabsiduabsudi",
//   //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeSzuQNFNwZHJmfbf2YqXKaA5v7mZ0XupANw&usqp=CAU",
//   //     diets: ["vegan", "vegetarian"],
//   // },
//   // {
//   //     name: "Berry Banana Breakfast Smoothie",
//   //     summary: "ajsduasdbiabsdiuabsiduabsudi",
//   //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeSzuQNFNwZHJmfbf2YqXKaA5v7mZ0XupANw&usqp=CAU",
//   //     diets: ["vegan", "vegetarian"],
//   // },
//   // {
//   //     name: "Garlicky Kale",
//   //     summary: "ajsduasdbiabsdiuabsiduabsudi",
//   //     image: "https://spoonacular.com/recipeImages/644387-312x231.jpg",
//   //     diets: ["vegan", "vegetarian"],
//   // },
//   // {
//   //     name: "Chicken Tortilla Soup (Slow Cooker)",
//   //     summary: "ajsduasdbiabsdiuabsiduabsudi",
//   //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeSzuQNFNwZHJmfbf2YqXKaA5v7mZ0XupANw&usqp=CAU",
//   //     diets: ["vegan", "vegetarian"],
//   // },
//   // {
//   //     name: "African Chicken Peanut Stew",
//   //     summary: "ajsduasdbiabsdiuabsiduabsudi",
//   //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeSzuQNFNwZHJmfbf2YqXKaA5v7mZ0XupANw&usqp=CAU",
//   //     diets: ["vegan", "vegetarian"],
//   // },
//   // {
//   //     name: "Nigerian Snail Stew",
//   //     summary: "ajsduasdbiabsdiuabsiduabsudi",
//   //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeSzuQNFNwZHJmfbf2YqXKaA5v7mZ0XupANw&usqp=CAU",
//   //     diets: ["vegan", "vegetarian"],
//   // },
//   // {
//   //     name: "Red Kidney Bean Jambalaya",
//   //     summary: "ajsduasdbiabsdiuabsiduabsudi",
//   //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeSzuQNFNwZHJmfbf2YqXKaA5v7mZ0XupANw&usqp=CAU",
//   //     diets: ["vegan", "vegetarian"],
//   // },
// ];
// const dietTypes = [
//   {
//     name: "gluten free",
//   },
//   {
//     name: "ketogenic",
//   },
//   {
//     name: "vegetarian",
//   },
//   {
//     name: "lacto ovo vegetarian",
//   },
//   {
//     name: "vegan",
//   },
//   {
//     name: "paleo",
//   },
//   {
//     name: "pescetarian",
//   },
//   {
//     name: "primal",
//   },
//   {
//     name: "whole30",
//   },
// ];

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
