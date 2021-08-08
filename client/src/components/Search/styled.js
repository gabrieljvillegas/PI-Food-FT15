import styled from "styled-components";

export const StyledDiv = styled.div`
  .search {
    &__form {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      &--input {
        border: none;
        width: 25rem;
        padding: 0.75rem;
      }
      &--btn {
        border-radius: 0.5rem;
        border: none;
        color: black;
        background-color: white;
        padding: 0 2rem;

        :hover {
          background-color: #d86018;
          cursor: pointer;
          transform: scale(1.1);
          transition: all 0.1s linear;
        }
      }
    }
  }
`;
