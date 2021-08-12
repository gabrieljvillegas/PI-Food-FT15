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
  }
`;
