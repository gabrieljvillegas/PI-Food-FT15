import {
    GET_RECIPES,
    GET_NAME_RECIPES,
    SEARCH_BY_NAME,
    GET_TYPES,
    FILTER_BY_TYPE
} from "../actions/constants";

const recipes2 = [{
        name: "Cauliflower, Brown Rice, and Vegetable Fried Rice ",
        summary: "ajsduasdbiabsdiuabsiduabsudi",
        image: "https://spoonacular.com/recipeImages/716426-312x231.jpg",
        diets: ["vegan", "vegetarian"],
    },
    {
        name: "Homemade Garlic and Basil French Fries",
        summary: "ajsduasdbiabsdiuabsiduabsudi",
        image: "https://spoonacular.com/recipeImages/715594-312x231.jpg",
        diets: ["dairy free",
            "lacto ovo vegetarian",
            "vegan"
        ],
    },
    {
        name: "hola",
        summary: "ajsduasdbiabsdiuabsiduabsudi",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeSzuQNFNwZHJmfbf2YqXKaA5v7mZ0XupANw&usqp=CAU",
        diets: ["vegan", "vegetarian"],
    },
    {
        name: "Berry Banana Breakfast Smoothie",
        summary: "ajsduasdbiabsdiuabsiduabsudi",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeSzuQNFNwZHJmfbf2YqXKaA5v7mZ0XupANw&usqp=CAU",
        diets: ["vegan", "vegetarian"],
    },
    {
        name: "Garlicky Kale",
        summary: "ajsduasdbiabsdiuabsiduabsudi",
        image: "https://spoonacular.com/recipeImages/644387-312x231.jpg",
        diets: ["vegan", "vegetarian"],
    },
    {
        name: "Chicken Tortilla Soup (Slow Cooker)",
        summary: "ajsduasdbiabsdiuabsiduabsudi",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeSzuQNFNwZHJmfbf2YqXKaA5v7mZ0XupANw&usqp=CAU",
        diets: ["vegan", "vegetarian"],
    },
    {
        name: "African Chicken Peanut Stew",
        summary: "ajsduasdbiabsdiuabsiduabsudi",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeSzuQNFNwZHJmfbf2YqXKaA5v7mZ0XupANw&usqp=CAU",
        diets: ["vegan", "vegetarian"],
    },
    {
        name: "Nigerian Snail Stew",
        summary: "ajsduasdbiabsdiuabsiduabsudi",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeSzuQNFNwZHJmfbf2YqXKaA5v7mZ0XupANw&usqp=CAU",
        diets: ["vegan", "vegetarian"],
    },
    {
        name: "Red Kidney Bean Jambalaya",
        summary: "ajsduasdbiabsdiuabsiduabsudi",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeSzuQNFNwZHJmfbf2YqXKaA5v7mZ0XupANw&usqp=CAU",
        diets: ["vegan", "vegetarian"],
    },
    {
        name: "Homemade Garlic and Basil French Fries",
        summary: "ajsduasdbiabsdiuabsiduabsudi",
        image: "https://spoonacular.com/recipeImages/715594-312x231.jpg",
        diets: ["dairy free",
            "lacto ovo vegetarian",
            "vegan"
        ],
    },
    {
        name: "hola",
        summary: "ajsduasdbiabsdiuabsiduabsudi",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeSzuQNFNwZHJmfbf2YqXKaA5v7mZ0XupANw&usqp=CAU",
        diets: ["vegan", "vegetarian"],
    },
    {
        name: "Berry Banana Breakfast Smoothie",
        summary: "ajsduasdbiabsdiuabsiduabsudi",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeSzuQNFNwZHJmfbf2YqXKaA5v7mZ0XupANw&usqp=CAU",
        diets: ["vegan", "whole30"],
    },
    {
        name: "Garlicky Kale",
        summary: "ajsduasdbiabsdiuabsiduabsudi",
        image: "https://spoonacular.com/recipeImages/644387-312x231.jpg",
        diets: ["whole30", "vegetarian"],
    },
    {
        name: "Chicken Tortilla Soup (Slow Cooker)",
        summary: "ajsduasdbiabsdiuabsiduabsudi",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeSzuQNFNwZHJmfbf2YqXKaA5v7mZ0XupANw&usqp=CAU",
        diets: ["primal", "vegetarian"],
    },
    {
        name: "African Chicken Peanut Stew",
        summary: "ajsduasdbiabsdiuabsiduabsudi",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeSzuQNFNwZHJmfbf2YqXKaA5v7mZ0XupANw&usqp=CAU",
        diets: ["vegan", "vegetarian"],
    },
    // {
    //     name: "Nigerian Snail Stew",
    //     summary: "ajsduasdbiabsdiuabsiduabsudi",
    //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeSzuQNFNwZHJmfbf2YqXKaA5v7mZ0XupANw&usqp=CAU",
    //     diets: ["vegan", "vegetarian"],
    // },
    // {
    //     name: "Red Kidney Bean Jambalaya",
    //     summary: "ajsduasdbiabsdiuabsiduabsudi",
    //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeSzuQNFNwZHJmfbf2YqXKaA5v7mZ0XupANw&usqp=CAU",
    //     diets: ["vegan", "vegetarian"],
    // },
    // {
    //     name: "Homemade Garlic and Basil French Fries",
    //     summary: "ajsduasdbiabsdiuabsiduabsudi",
    //     image: "https://spoonacular.com/recipeImages/715594-312x231.jpg",
    //     diets: ["dairy free",
    //         "lacto ovo vegetarian",
    //         "vegan"
    //     ],
    // },
    // {
    //     name: "hola",
    //     summary: "ajsduasdbiabsdiuabsiduabsudi",
    //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeSzuQNFNwZHJmfbf2YqXKaA5v7mZ0XupANw&usqp=CAU",
    //     diets: ["vegan", "vegetarian"],
    // },
    // {
    //     name: "Berry Banana Breakfast Smoothie",
    //     summary: "ajsduasdbiabsdiuabsiduabsudi",
    //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeSzuQNFNwZHJmfbf2YqXKaA5v7mZ0XupANw&usqp=CAU",
    //     diets: ["vegan", "vegetarian"],
    // },
    // {
    //     name: "Garlicky Kale",
    //     summary: "ajsduasdbiabsdiuabsiduabsudi",
    //     image: "https://spoonacular.com/recipeImages/644387-312x231.jpg",
    //     diets: ["vegan", "vegetarian"],
    // },
    // {
    //     name: "Chicken Tortilla Soup (Slow Cooker)",
    //     summary: "ajsduasdbiabsdiuabsiduabsudi",
    //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeSzuQNFNwZHJmfbf2YqXKaA5v7mZ0XupANw&usqp=CAU",
    //     diets: ["vegan", "vegetarian"],
    // },
    // {
    //     name: "African Chicken Peanut Stew",
    //     summary: "ajsduasdbiabsdiuabsiduabsudi",
    //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeSzuQNFNwZHJmfbf2YqXKaA5v7mZ0XupANw&usqp=CAU",
    //     diets: ["vegan", "vegetarian"],
    // },
    // {
    //     name: "Nigerian Snail Stew",
    //     summary: "ajsduasdbiabsdiuabsiduabsudi",
    //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeSzuQNFNwZHJmfbf2YqXKaA5v7mZ0XupANw&usqp=CAU",
    //     diets: ["vegan", "vegetarian"],
    // },
    // {
    //     name: "Red Kidney Bean Jambalaya",
    //     summary: "ajsduasdbiabsdiuabsiduabsudi",
    //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeSzuQNFNwZHJmfbf2YqXKaA5v7mZ0XupANw&usqp=CAU",
    //     diets: ["vegan", "vegetarian"],
    // },
]
const dietTypes = [{

        name: "gluten free"
    },
    {
        name: "ketogenic"
    },
    {
        name: "vegetarian"
    },
    {
        name: "lacto ovo vegetarian"
    },
    {
        name: "vegan"
    },
    {
        name: "paleo"
    },
    {
        name: "pescetarian"
    },
    {
        name: "primal"
    },
    {
        name: "whole30"
    },

];


var initialState = {
    recipes: recipes2,
    recipesSearch: [],
    recipesFlag: "",
    types: dietTypes,
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
                // return recipe.name.toUpperCase().includes(payload.toUpperCase());
                return recipe.name.toUpperCase().includes(payload);
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
        case FILTER_BY_TYPE:
            console.log("FILTRANDO POR TIPO:", payload);
            const filterByType = state.recipes.filter( recipe => {

                let flag=false;

                recipe.diets.forEach( diet => {
                    
                    for (let i = 0; i < payload.length; i++) {
                        if(payload[i] === diet) flag=true;
                        console.log(flag)
                    }

                } )

                 return flag===true;


            } )
              

            console.log(filterByType)
    default:
    return state;
}
}
export default reducer;