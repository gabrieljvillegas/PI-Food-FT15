import styled from "styled-components";

export const StyledDiv = styled.div`
  color: white;
  padding: 1.5rem;
  background-color: #19272e;
  border-radius: 0 5rem 5rem 0;
  transform: translateX(-75%);
  transition: 0.5s linear;
  :hover {
    transform: translateX(0.001rem);

    .order__title {
      transform: rotate(90deg);
    }
  }
  .order {
    padding: 1rem 0;
    display: grid;
    grid-template-columns: 80% 20%;
    align-items: center;

    &__title {
      transition: 0.5s linear;
      p {
        font-size: 1.4rem;
        transform: rotate(270deg);
      }
    }
    &__content {
      p {
        font-size: 1rem;
      }
      display: grid;
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;
      &--check {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 0.5rem;
      }
    }
  }
`;
