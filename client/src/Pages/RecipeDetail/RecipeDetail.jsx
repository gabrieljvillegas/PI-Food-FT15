import { StyledDiv } from "./styled";
import { useSelector } from "react-redux";

const RecipeDetail = (props) => {
  const recipes = useSelector((state) => state.recipes);
  const idRecipe = props.match.params.id;

  const recipeFind = recipes.find((recipe) => recipe.id === idRecipe);

  return (
    <StyledDiv>
      <div className="detail container">
        <div className="left">
          <div className="detail__name">
            <h3>Receta #{recipeFind.id}</h3>
            <h3>{recipeFind.name}</h3>
          </div>
        </div>
        <div className="right">
          <div className="detail__image">
            <img src={recipeFind.image} alt="" />
          </div>

          <div className="detail__summary">
            <h1>{recipeFind.summary}</h1>
          </div>
        </div>
      </div>
    </StyledDiv>
  );
};

export default RecipeDetail;
