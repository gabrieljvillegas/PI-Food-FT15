import styled from "styled-components";
import image from "../../images/landing_page.jpg";

export const StyledDiv = styled.div`
  position: fixed;
  background-image: url(${image});
  width: 100%;
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  .landing {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    margin-top: 5rem;
    gap: 1.5rem;

    padding: 2rem;
    &__welcome {
      width: 20rem;
      padding: 1rem 3rem;
      img {
        animation: welcome 1s ease-in-out;
        font-size: 4.2rem;
      }
    }

    &__links {
      &--link {
        color: white;
        text-decoration: none;
        animation: welcome 1s ease-in-out;
      }
    }
  }

  @keyframes welcome {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }
`;
