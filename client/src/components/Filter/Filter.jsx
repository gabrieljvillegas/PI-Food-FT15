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
      <div className="filter">
        <div className="filter__content">
          <div className="filter__content--check">
            {types &&
              types.map((type) => {
                return (
                  <Checkbox
                    label={type.name}
                    onChange={(e) => handleChange(e)}
                  />
                );
              })}
          </div>
          <div className="filter__content--clear">
            <button>Borrar filtros</button>
          </div>
        </div>
        <div className="filter__title">
          <p>Filtrar</p>
        </div>
      </div>
    </StyledDiv>
  );
};

export default Filter;
