import styled from "styled-components";

export const StyledDiv = styled.div`
  background-color: #19272e;
  padding: 1rem;
  .nav {
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &__logo {
      width: 7rem;
    }
    &__back {
      transition: 0.3s ease;
      &--link {
        text-decoration: none;
        color: white;
        font-size: 2rem;
        font-weight: 800;
        border: 1px solid white;
        padding: 0.8rem;
        border-radius: 2rem;
      }
      :hover {
        transform: scale(1.1);
      }
    }
  }
`;
