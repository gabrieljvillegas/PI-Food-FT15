import styled from "styled-components";

export const StyledDiv = styled.div`
  :hover {
    transform: scale(1.05);
    transition: all 0.1s ease-in-out;
  }
  .recipe {
    color: white;
    background-color: #19272e;
    border-radius: 10px;
    max-width: 35rem;
    height: 40rem;
    position: relative;
    transform-style: preserve-3d;
    transition: 0.8s ease;

    :hover {
      background-color: #bc4764;
      transform: rotateY(180deg);
    }

    &__front,
    &__back {
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      position: absolute;
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
    }
    &__front {
      display: grid;
      grid-template-rows: 25% 50% 25%;
      align-items: center;

      &--name {
        padding: 1rem;
        text-align: center;
        h4 {
          font-size: 1.5rem;
        }
      }
      &--image {
        padding: 1rem;
        img {
          border-radius: 0.6rem;
        }
      }

      &--diets {
        padding: 1rem;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 0.5rem;
        p {
          font-weight: 300;
          font-style: italic;
          text-align: center;
          font-size: 1rem;
        }
      }
    }
    &__back {
      transform: rotateY(180deg);
      display: grid;

      &--title {
        text-align: center;
        margin-top: 3rem;
        padding: 0.5rem 3rem;
        h4 {
          font-size: 1.5rem;
        }
      }
      &--content {
        text-align: justify;
        padding: 0 3rem;
        p {
          font-size: 1.2rem;
        }
      }
    }
  }
`;
