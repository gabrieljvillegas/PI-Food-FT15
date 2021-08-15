import { StyledDiv } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getIdRecipe } from "../../redux/actions";

const RecipeDetail = (props) => {
  const dispatch = useDispatch();
  const recipeDetail = useSelector((state) => state.recipeDetail);
  const idRecipe = props.match.params.id;

  useEffect(() => {
    dispatch(getIdRecipe(idRecipe));
  }, [dispatch, idRecipe]);

  console.log(recipeDetail);

  return (
    <StyledDiv>
      {recipeDetail.name && (
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
                  {recipeDetail.dishTypes ? (
                    recipeDetail.dishTypes.map((type) => {
                      return <p>{type}</p>;
                    })
                  ) : (
                    <p>Don't found</p>
                  )}
                </div>
              </div>
              <div className="detail__diets">
                <p className="detail__diets--title">Diets</p>
                <div className="detail__diets--content">
                  {recipeDetail.diets ? (
                    recipeDetail.diets.map((diet) => {
                      return <p>{diet}</p>;
                    })
                  ) : (
                    <p>Diets don't found</p>
                  )}
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
              <h4>Steps</h4>
              <div className="detail__steps--el">
                {recipeDetail ? (
                  recipeDetail.steps.map((step) => {
                    return (
                      <div className="el--flex">
                        <p>{step}</p>
                      </div>
                    );
                  })
                ) : (
                  <p>Steps don't found</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </StyledDiv>
  );
};

export default RecipeDetail;
