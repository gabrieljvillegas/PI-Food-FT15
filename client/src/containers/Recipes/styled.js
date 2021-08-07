import styled from "styled-components";

export const StyledDiv = styled.div`
  .recipes {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }
  .loading {
    p {
      text-align: center;
    }
  }
`;
