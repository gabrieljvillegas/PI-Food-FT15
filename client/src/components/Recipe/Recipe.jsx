import { StyledDiv } from "./styled";

const Recipe = ({ name, image, diets, summary, spoonacularScore }) => {
  return (
    <StyledDiv>
      <div className="recipe">
        <div className="recipe__front">
          <div className="recipe__front--name">
            <h4>{name}</h4>
          </div>
          <div className="recipe__front--image">
            <div className="recipe__front--image--score">
              <p>Score</p>
              <p>{spoonacularScore}</p>
            </div>
            <div>
              <img src={image} alt="imagecargada" />
            </div>
          </div>
          <div className="recipe__front--diets">
            {diets &&
              diets.map((diet, idx) => {
                return <p key={idx}>{diet}</p>;
              })}
          </div>
        </div>
        <div className="recipe__back">
          <div className="recipe__back--title">
            <h4>Summary</h4>
          </div>
          <div className="recipe__back--content">
            <p>
              {" "}
              {(summary = summary.slice(0, 400))}
              ...
            </p>
          </div>
        </div>
      </div>
    </StyledDiv>
  );
};

export default Recipe;
