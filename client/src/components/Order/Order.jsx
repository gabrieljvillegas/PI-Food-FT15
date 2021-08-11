import { StyledDiv } from "./styled";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { orderRecipes } from "../../redux/actions";

const Order = () => {
  const dispatch = useDispatch();
  const [order, setOrder] = useState([]);

  function handleChange(e) {
    setOrder(() => e.target.value);
  }

  useEffect(() => {
    console.log("order nuevo:", order);
    dispatch(orderRecipes(order));
  }, [dispatch, order]);
  return (
    <StyledDiv>
      <div className="order">
        <div className="order__content">
          <div className="order__content--AZ">
            <input
              name="order"
              type="radio"
              value="A-Z"
              onChange={(e) => handleChange(e)}
            />
            A-Z
          </div>
          <div className="order__content--ZA">
            <input
              name="order"
              type="radio"
              value="Z-A"
              onChange={(e) => handleChange(e)}
            />
            Z-A
          </div>
          <div className="order__content--score">
            <input
              name="order"
              type="radio"
              value="Score"
              onChange={(e) => handleChange(e)}
            />
            Score
          </div>
        </div>
        <div className="order__title">
          <p>Orden</p>
        </div>
      </div>
    </StyledDiv>
  );
};

export default Order;
