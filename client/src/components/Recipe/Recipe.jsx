import { StyledDiv } from "./styled";

const Recipe = ({ name, image, diets }) => {
  return (
    <StyledDiv>
      <div className="recipe">
        <div className="recipe__name">
          <h4>{name}</h4>
        </div>
        <div className="recipe__image">
          <img src={image} alt="" />
        </div>
        <div className="recipe__diets">
          {diets &&
            diets.map((diet, idx) => {
              return <p key={idx}>{diet}</p>;
            })}
        </div>
      </div>
    </StyledDiv>
  );
};

export default Recipe;
