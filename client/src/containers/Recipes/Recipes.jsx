import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllRecipes } from "../../redux/actions";

import Recipe from "../../components/Recipe/Recipe";
import { StyledDiv } from "./styled";

const Recipes = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);
  const recipesSearch = useSelector((state) => state.recipesSearch);

  useEffect(() => {
    dispatch(getAllRecipes());
  }, [dispatch]);

  // const pruebaArray = [
  //   {
  //     name: "Cauliflowe, Brown Rice, and Vegetable Fried Rice",
  //     image: "https://spoonacular.com/recipeImages/716426-312x231.jpg",
  //     diets: [
  //       "gluten free",
  //       "dairy free",
  //       "lacto ovo vegetarian",
  //       "vegan",
  //       "vegetarian",
  //     ],
  //   },
  //   {
  //     name: "Homemade Garlic and Basil French Fries",
  //     image: "https://spoonacular.com/recipeImages/639851-312x231.jpg",
  //     diets: ["lacto ovo vegetarian", "vegan", "vegetarian"],
  //   },
  //   {
  //     name: "Berry Banana Breakfast Smoothie",
  //     image: "https://spoonacular.com/recipeImages/792072-312x231.jpg",
  //     diets: ["lacto ovo vegetarian", "vegan", "vegetarian"],
  //   },
  //   {
  //     name: "Berry Banana Breakfast Smoothie",
  //     image: "https://spoonacular.com/recipeImages/641975-312x231.jpg",
  //     diets: ["lacto ovo vegetarian", "vegan", "vegetarian"],
  //   },
  //   {
  //     name: "Berry Banana Breakfast Smoothie",
  //     image: "https://spoonacular.com/recipeImages/659135-312x231.jpg",
  //     diets: ["lacto ovo vegetarian", "vegan", "vegetarian"],
  //   },
  //   {
  //     name: "Berry Banana Breakfast Smoothie",
  //     image: "https://spoonacular.com/recipeImages/640117-312x231.jpg",
  //     diets: ["lacto ovo vegetarian", "vegan", "vegetarian"],
  //   },
  //   {
  //     name: "Berry Banana Breakfast Smoothie",
  //     image: "https://spoonacular.com/recipeImages/716426-312x231.jpg",
  //     diets: ["lacto ovo vegetarian", "vegan", "vegetarian"],
  //   },
  // ];

  return (
    <StyledDiv>
      <div class="recipes container">
        {recipesSearch.length ? (
          recipesSearch.map((recipe, idx) => {
            return (
              <Recipe
                key={idx}
                name={recipe.name}
                image={recipe.image}
                diets={recipe.diets}
              />
            );
          })
        ) : recipes.length ? (
          recipes.map((recipe, idx) => {
            return (
              <Recipe
                key={idx}
                name={recipe.name}
                image={recipe.image}
                diets={recipe.diets}
              />
            );
          })
        ) : (
          <div className="loading">
            <p>Cargando...</p>
          </div>
        )}
      </div>
    </StyledDiv>
  );
};

export default Recipes;
