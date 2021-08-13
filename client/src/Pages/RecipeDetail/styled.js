import styled from "styled-components";

export const StyledDiv = styled.div`
  padding-top: 3rem;
  width: 100%;
  height: 100%;
  .detail {
    color: #19272e;
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 2rem;
    p {
      font-size: 1.3rem;
    }

    .left {
      display: flex;
      flex-direction: column;
      align-items: center;

      .left__flex {
        display: flex;
        .detail__name {
          h3 {
            font-size: 1.7rem;
          }
          width: 40%;
          height: 100%;
          box-shadow: 5px 5px 7px rgba(33, 33, 33, 0.7);
          transform: rotate(-14deg);
          color: white;
          background-color: #bc4764;
          padding: 1rem;
          font-family: "Handlee", arial, sans-serif;
          text-align: center;
          margin-bottom: 2rem;
        }
        .detail__image {
          img {
            border-radius: 0.4rem;
            width: 100%;
          }
        }
      }

      .detail__summary {
        text-align: justify;

        &--title {
          text-align: center;
          font-weight: bold;
          font-size: 1.7rem;
          padding: 1rem;
        }
      }
    }
    .right {
      &__flex {
        display: grid;
        grid-template-columns: 2fr 2fr 1fr;
        gap: 2rem;

        .detail__dishTypes {
          border-radius: 1rem;
          padding: 0.5rem;
          text-align: center;
          &--title {
            font-weight: bold;
            font-size: 1.7rem;
            padding: 1rem;
          }
          &--content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 0.3rem;
            color: white;
            p {
              border-radius: 1rem;
              padding: 0.5rem;
              background-color: #19272e;
            }
          }
        }

        .detail__diets {
          border-radius: 1rem;
          padding: 0.5rem;
          text-align: center;

          &--title {
            font-weight: bold;
            font-size: 1.7rem;
            padding: 1rem;
          }
          &--content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 0.3rem;
            color: white;
            p {
              border-radius: 1rem;
              padding: 0.5rem;
              background-color: #19272e;
            }
          }
        }

        .scores {
          text-align: center;
          color: white;
          p {
            font-size: 1.3rem;
          }
          .detail__score,
          .detail__health {
            border-radius: 50%;
            background-color: #bc4764;
            align-self: flex-start;
            padding: 1rem;
            margin: 1rem;
          }
        }
      }
      .detail__steps {
        &--el {
          .el--flex {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 1rem;
          }
        }
      }
    }
  }
`;
