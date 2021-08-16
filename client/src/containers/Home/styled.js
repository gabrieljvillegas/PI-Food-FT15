import styled from "styled-components";

export const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 15% 85%;

  .centerText {
    text-align: center;
    padding: 10rem;
  }
  .home {
    margin-right: 6.2rem;
    &__pagination {
      margin: 0 auto;
    }
  }
  .btn-create {
    text-decoration: none;

    font-size: 1.2rem;
    color: white;
    font-weight: bold;

    text-align: center;

    padding: 1.5rem 1rem;
    border-radius: 50%;
    position: fixed;
    z-index: 999999;
    top: 20rem;
    right: 1rem;
    background-color: #bc4764;
    transition: 0.5s ease;
    :hover {
      transform: scale(1.2);
    }
  }
  .loader {
    transform: scale(0.2);
    width: 100%;
    height: 100%;
    background: url(http://soldadoresymotores.com/site/images/loader.gif) 50%
      50% no-repeat;
    opacity: 0.8;
  }
`;
