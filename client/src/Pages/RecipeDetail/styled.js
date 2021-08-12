import styled from "styled-components";

export const StyledDiv = styled.div`
  padding-top: 5rem;
  position: fixed;
  width: 100%;
  height: 100%;
  .detail {
    color: #19272e;
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 5rem;
    .detail__image {
      img {
        width: 40rem;
        transform-style: preserve-3d;
      }
    }

    .detail__name {
      /* Firefox */
      -moz-box-shadow: 5px 5px 7px rgba(33, 33, 33, 1);
      /* Safari+Chrome */
      -webkit-box-shadow: 5px 5px 7px rgba(33, 33, 33, 0.7);
      /* Opera */
      box-shadow: 5px 5px 7px rgba(33, 33, 33, 0.7);
      transform: rotate(-4deg);
      color: white;
      background-color: #bc4764;
      padding: 2rem;
      font-family: "Handlee", arial, sans-serif;
      text-align: center;
    }
  }
`;
