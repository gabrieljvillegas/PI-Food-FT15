import styled from "styled-components";

export const StyledDiv = styled.div`
  .recipes {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    .recipe {
      text-decoration: none;
    }
  }
  .loading {
    p {
      text-align: center;
    }
  }
`;
