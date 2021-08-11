import { StyledDiv } from "./styled";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Checkbox from "../Checkbox/Checkbox";

const Order = () => {
  const [order, setOrder] = useState([]);

  function handleChange(e) {
    console.log(e.target.checked);
    setOrder(() => e.target.parentElement.textContent);
  }

  useEffect(() => {
    console.log("order nuevo:", order);
  }, [order]);
  return (
    <StyledDiv>
      <div className="order">
        <div className="order__content">
          <div className="order__content--AZ">
            <Checkbox label={"A-Z"} onChange={(e) => handleChange(e)} />
          </div>
          <div className="order__content--ZA">
            <Checkbox label={"Z-A"} onChange={(e) => handleChange(e)} />
          </div>
          <div className="order__content--score">
            <Checkbox label={"Score"} onChange={(e) => handleChange(e)} />
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
