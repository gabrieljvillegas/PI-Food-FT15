import { Link } from "react-router-dom";

import Recipe from "../../components/Recipe/Recipe";
import { StyledDiv } from "./styled";

const Recipes = ({ recipes, loading }) => {
  if (loading) {
    return <p>Cargando..</p>;
  }

  return (
    <StyledDiv>
      <div className="recipes container">
        {recipes.length ? (
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
