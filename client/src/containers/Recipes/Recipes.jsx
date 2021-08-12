import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";

import Recipe from "../../components/Recipe/Recipe";
import { StyledDiv } from "./styled";

const Recipes = ({ recipes, loading }) => {
  const recipesSearch = useSelector((state) => state.recipesSearch);

  if (loading) {
    return <p>Cargando..</p>;
  }

  return (
    <StyledDiv>
      <div className="recipes container">
        {recipes.length ? (
          recipes.map((recipe, idx) => {
            console.log(recipe.spoonacularScore);
            return (
              <Link to={`/recipeDetail/${recipe.id}`} className="recipe">
                <Recipe
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
  // return (
  //   <StyledDiv>
  // <div className="recipes container">
  //   {recipesSearch.length ? (
  //     recipesSearch.map((recipe, idx) => {
  //       return (
  //         <Link to="#" className="recipe">
  //           <Recipe
  //             key={idx}
  //             name={recipe.name}
  //             image={recipe.image}
  //             diets={recipe.diets}
  //             summary={recipe.summary}
  //           />
  //         </Link>
  //       );
  //     })
  //   ) : recipes.length ? (
  //     recipes.map((recipe, idx) => {
  //       return (
  //         <Link to="#" className="recipe">
  //           <Recipe
  //             key={idx}
  //             name={recipe.name}
  //             image={recipe.image}
  //             diets={recipe.diets}
  //             summary={recipe.summary}
  //           />
  //         </Link>
  //       );
  //     })
  //   ) : (
  //     <div className="loading">
  //       <p>Cargando...</p>
  //     </div>
  //   )}
  // </div>
  //   </StyledDiv>
  // );
};

export default Recipes;
