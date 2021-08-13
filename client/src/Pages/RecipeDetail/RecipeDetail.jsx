import { StyledDiv } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getIdRecipe } from "../../redux/actions";

const RecipeDetail = (props) => {
  // const recipes = useSelector((state) => state.recipes);
  const dispatch = useDispatch();
  const recipeDetail = useSelector((state) => state.recipeDetail);
  const idRecipe = props.match.params.id;

  useEffect(() => {
    dispatch(getIdRecipe(idRecipe));
  }, [dispatch]);

  console.log("desde el recipes:", recipeDetail);

  // const recipeFind = recipes.find((recipe) => recipe.id === idRecipe);

  //   Ruta de detalle de receta: debe contener
  // [ ] Los campos mostrados en la ruta principal para cada receta
  // (imagen, nombre, tipo de plato y tipo de dieta)
  // [ ] Resumen del plato
  // [ ] Puntuación
  // [ ] Nivel de "comida saludable"
  // [ ] Paso a paso
  return (
    <StyledDiv>
      <div className="detail container">
        <div className="left">
          <div className="left__flex">
            <div className="detail__name">
              <h3>Receta #{recipeDetail.id}</h3>
              <h3>{recipeDetail.name}</h3>
            </div>
            <div>
              <div className="detail__image">
                <img src={recipeDetail.image} alt="" />
              </div>
            </div>
          </div>
          <div className="detail__summary">
            <p className="detail__summary--title">Summary</p>
            <p className="detail__summary--content">{recipeDetail.summary}</p>
          </div>
        </div>
        <div className="right">
          <div className="right__flex">
            <div className="detail__dishTypes">
              <p className="detail__dishTypes--title">Dish Types</p>
              <div className="detail__dishTypes--content">
                {recipeDetail.dishTypes &&
                  recipeDetail.dishTypes.map((type) => {
                    return <p>{type}</p>;
                  })}
              </div>
            </div>
            <div className="detail__diets">
              <p className="detail__diets--title">Diets</p>
              <div className="detail__diets--content">
                {recipeDetail.diets &&
                  recipeDetail.diets.map((diet) => {
                    return <p>{diet}</p>;
                  })}
              </div>
            </div>
            <div className="scores">
              <div className="detail__score">
                <p className="detail__score--title">Score</p>
                <div className="detail__score--content">
                  <p>{recipeDetail.spoonacularScore}</p>
                </div>
              </div>
              <div className="detail__health">
                <p className="detail__health--title">Health</p>
                <div className="detail__health--content">
                  <p>{recipeDetail.healthScore}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="detail__steps">
            <div className="detail__steps--el">
              {recipeDetail.steps.steps &&
                recipeDetail.steps.steps.map((step) => {
                  return (
                    <div className="el--flex">
                      <p>{step.number}</p>
                      <p>{step.step}</p>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </StyledDiv>
  );
};

export default RecipeDetail;
