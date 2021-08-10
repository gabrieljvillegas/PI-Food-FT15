import styled from "styled-components";

export const StyledDiv = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    padding: 1rem;
    margin-bottom: 0.6rem;

    &__link {
      display: flex;
      margin-left: 1rem;
      padding: 1.5rem;
      background-color: #bc4764;
      text-decoration: none;
      border-radius: 40%;

      p {
        font-size: 1rem;
        font-weight: bold;
        color: white;
      }
    }
  }
`;
