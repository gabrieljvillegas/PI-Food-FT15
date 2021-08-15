import styled from "styled-components";
import image from "../../images/create-recipes.jpg";

export const StyledDiv = styled.div`
  background-image: url(${image});
  background-repeat: no-repeat;
  background-position-y: -30rem;
  background-size: cover;
  width: 100%;
  height: calc(100vh - 10rem);

  .form {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__diet {
      text-align: center;
      .grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        align-items: center;
        justify-items: center;
        padding: 1rem;

        &__el {
          display: flex;
          gap: 1rem;
          padding: 0.5rem;

          &--btn {
            background-color: red;
          }
        }
      }
    }
  }
`;
