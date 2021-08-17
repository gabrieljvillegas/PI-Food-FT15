import styled from "styled-components";

export const StyledDiv = styled.div`
  .search {
    &__form {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      &--input {
        text-align: center;
        width: 25rem;
        padding: 0.75rem;
        border-radius: 2rem;
        padding: 1rem;
      }
    }

    button {
      font-weight: bold;
      color: white;
      border-radius: 1rem;
      padding: 0rem 4rem;
      border: none;
      background-color: #bc4764;
      transition: 0.3s ease;

      :hover {
        cursor: pointer;
        transform: scale(1.01);
      }
    }
  }
`;
