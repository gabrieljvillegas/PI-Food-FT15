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
          <div className="order__content--scoreDown">
            <input
              name="order"
              type="radio"
              value="ScoreDown"
              onChange={(e) => handleChange(e)}
            />
            Score Down
          </div>
          <div className="order__content--scoreUp">
            <input
              name="order"
              type="radio"
              value="ScoreUp"
              onChange={(e) => handleChange(e)}
            />
            Score Up
          </div>
          <div className="order__content--scoreUp">
            <input
              name="order"
              type="radio"
              value="HealthUp"
              onChange={(e) => handleChange(e)}
            />
            Health Up
          </div>
          <div className="order__content--scoreUp">
            <input
              name="order"
              type="radio"
              value="HealthDown"
              onChange={(e) => handleChange(e)}
            />
            Health Down
          </div>
        </div>
        <div className="order__title">
          <p>Order</p>
        </div>
      </div>
    </StyledDiv>
  );
};

export default Order;
