import styled from "styled-components";
import image from "../../images/create-recipes.jpg";

export const StyledDiv = styled.div`
  .titlePage {
    text-align: center;
    margin: 1.5rem;
  }

  .form {
    color: white;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 0 auto;
    padding: 2rem;
    background-color: #bc4764;
    margin-top: 2rem;
    border-radius: 2rem;

    .btn-create {
      grid-column-start: 1;
      grid-column-end: 3;
      align-self: center;
      margin: 0rem auto;
      background-color: #19272e;
      color: white;
      border: none;
      padding: 0.5rem;
      border-radius: 2rem;
      width: 20rem;
      font-size: 2rem;
      transition: 0.5s ease;

      :hover {
        cursor: pointer;
        transform: scale(1.1);
      }
    }

    &__name {
      margin: 1rem 0;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 1rem;
      text-align: center;
      p {
        font-size: 1.6rem;
        padding: 0.3rem;
      }

      input {
        border: none;
        width: 30rem;
        font-family: "Montserrat", sans-serif;
      }
    }

    &__summary {
      margin: 1rem 0;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 1rem;
      p {
        font-size: 1.6rem;
        padding: 0.3rem;
      }
      textarea {
        border: none;
        width: 30rem;
        height: 5rem;
        transition: 0.3s ease;
        font-family: "Montserrat", sans-serif;

        :focus {
          width: 100%;
          height: 20rem;
        }
      }
    }
    &__steps {
      margin: 1rem 0;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 1rem;
      text-align: center;
      p {
        font-size: 1.6rem;
        padding: 0.3rem;
      }
      textarea {
        border: none;
        width: 30rem;
        height: 5rem;
        transition: 0.3s ease;
        font-family: "Montserrat", sans-serif;

        :focus {
          width: 100%;
          height: 20rem;
        }
      }
      button {
        background-color: #bc4764;
        color: white;
        border: 1px solid white;
        padding: 0.5rem;
        border-radius: 2rem;
      }
    }

    &__image {
      margin: 1rem 0;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 1rem;
      text-align: center;
      p {
        font-size: 1.6rem;
        padding: 0.3rem;
      }

      input {
        border: none;
        width: 30rem;
        font-family: "Montserrat", sans-serif;
      }
    }

    &__score {
      margin: 1rem 0;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 1rem;
      text-align: center;
      p {
        font-size: 1.6rem;
        padding: 0.3rem;
      }

      input {
        border: none;
        width: 30rem;
        font-family: "Montserrat", sans-serif;
      }
    }

    &__scoreHealth {
      margin: 1rem 0;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 1rem;
      text-align: center;
      p {
        font-size: 1.6rem;
        padding: 0.3rem;
      }

      input {
        border: none;
        width: 30rem;
        font-family: "Montserrat", sans-serif;
      }
    }
    .flexcheckboxs {
      display: flex;
      justify-content: center;
      gap: 5rem;
    }

    &__diet {
      text-align: center;
    }
    &__dishType {
      text-align: center;
    }
  }

  .error {
    color: red;
    p {
      font-size: 1rem;
    }
  }
`;
