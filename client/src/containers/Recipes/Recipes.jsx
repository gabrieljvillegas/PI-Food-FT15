import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllRecipes } from "../../redux/actions";
import { Link } from "react-router-dom";

import Recipe from "../../components/Recipe/Recipe";
import { StyledDiv } from "./styled";

const Recipes = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);
  const recipesSearch = useSelector((state) => state.recipesSearch);

  useEffect(() => {
    dispatch(getAllRecipes());
  }, [dispatch]);

  return (
    <StyledDiv>
      <div className="recipes container">
        {recipesSearch.length ? (
          recipesSearch.map((recipe, idx) => {
            return (
              <Link to="#" className="recipe">
                <Recipe
                  key={idx}
                  name={recipe.name}
                  image={recipe.image}
                  diets={recipe.diets}
                  summary={recipe.summary}
                />
              </Link>
            );
          })
        ) : recipes.length ? (
          recipes.map((recipe, idx) => {
            return (
              <Link to="#" className="recipe">
                <Recipe
                  key={idx}
                  name={recipe.name}
                  image={recipe.image}
                  diets={recipe.diets}
                  summary={recipe.summary}
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
