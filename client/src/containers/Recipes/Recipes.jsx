import { Link } from "react-router-dom";
import Recipe from "../../components/Recipe/Recipe";
import { StyledDiv } from "./styled";

const Recipes = ({ recipes }) => {
  console.log(recipes);
  console.log(recipes.length);
  return (
    <StyledDiv>
      <div className="recipes container">
        {recipes.length &&
          recipes.map((recipe, idx) => {
            return (
              <Link
                key={idx}
                to={`/recipeDetail/${recipe.id}`}
                className="recipe"
              >
                <Recipe
                  key={idx}
                  id={recipe.id}
                  name={recipe.name}
                  image={recipe.image}
                  diets={recipe.diets}
                  summary={recipe.summary}
                  spoonacularScore={recipe.spoonacularScore}
                />
              </Link>
            );
          })}
      </div>
    </StyledDiv>
  );
};

export default Recipes;
