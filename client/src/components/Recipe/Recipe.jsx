import { StyledDiv } from "./styled";

const Recipe = ({ name, image, diets }) => {
  return (
    <StyledDiv>
      <div class="recipe">
        <div class="recipe__name">
          <p>{name}</p>
        </div>
        <div class="recipe__image">
          <img src={image} alt="" />
        </div>
        <div class="recipe__diets">
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
