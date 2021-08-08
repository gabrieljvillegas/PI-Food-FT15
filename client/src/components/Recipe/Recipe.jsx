import { StyledDiv } from "./styled";

const Recipe = ({ name, image, diets, summary }) => {
  return (
    <StyledDiv>
      <div className="recipe">
        <div className="recipe__front">
          <div className="recipe__front--name">
            <h4>{name}</h4>
          </div>
          <div className="recipe__front--image">
            <img src={image} alt="" />
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
            <h4>Resumen</h4>
          </div>
          <div className="recipe__back--content">
            <p>{summary}</p>
          </div>
        </div>
      </div>
    </StyledDiv>
  );
};

export default Recipe;