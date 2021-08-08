import { StyledDiv } from "./styled";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTypes } from "../../redux/actions";
import Checkbox from "../Checkbox/Checkbox";

const Filter = () => {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  useEffect(() => {
    console.log("soy el filter nuevoo:", filter);
  }, [filter]);

  const handleChange = (e) => {
    setFilter((prev) => e.target.parentElement.textContent);
  };
  return (
    <StyledDiv>
      {types &&
        types.map((type) => {
          return (
            <Checkbox label={type.name} onChange={(e) => handleChange(e)} />
          );
        })}
    </StyledDiv>
  );
};

export default Filter;
