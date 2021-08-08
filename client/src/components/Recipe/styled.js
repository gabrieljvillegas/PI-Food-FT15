import styled from "styled-components";

export const StyledDiv = styled.div`
  :hover {
    transform: scale(1.05);
    transition: all 0.1s ease-in-out;
  }
  .recipe {
    display: grid;
    grid-template-rows: 25% 50% 25%;
    align-items: center;
    color: white;
    background-color: black;
    max-width: 100%;
    height: 35rem;
    border-radius: 10px;
    padding: 1.5rem;

    :hover {
      background-color: #d86018;
    }

    &__name {
      h4 {
        font-size: 1.5rem;
      }
    }
    &__image {
    }

    &__diets {
      p {
        text-align: center;
        font-size: 1rem;
      }
    }
  }
`;
