import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllRecipes } from "../../redux/actions";
import { Link } from "react-router-dom";

import Recipe from "../../components/Recipe/Recipe";
import { StyledDiv } from "./styled";

const Recipes = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);
  const recipesSearch = useSelector((state) => state.recipesSearch);
  const recipesFlag = useSelector((state) => state.recipesFlag);

  useEffect(() => {
    console.log("es el use effect");
    dispatch(getAllRecipes());
  }, []);

  return (
    <StyledDiv>
      <div className="recipes container">
        {recipesFlag ? (
          recipesSearch.map((recipe, idx) => {
            return (
              <Link to="#" className="recipe">
                <Recipe
                  key={idx}
                  name={recipe.name}
                  image={recipe.image}
                  diets={recipe.diets}
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
