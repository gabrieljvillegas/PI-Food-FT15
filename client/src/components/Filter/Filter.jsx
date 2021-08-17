import { StyledDiv } from "./styled";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTypes, filterByType } from "../../redux/actions";
import Checkbox from "../Checkbox/Checkbox";

const Filter = () => {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  useEffect(() => {
    console.log("filter es:", filter);
    dispatch(filterByType(filter));
  }, [dispatch, filter]);

  const handleChange = (e) => {
    const finded = filter.find(
      (diet) => diet === e.target.parentElement.textContent
    );
    if (finded) {
      const newFilter = filter.filter(
        (type) => type !== e.target.parentElement.textContent
      );
      setFilter(() => newFilter);
    } else {
      setFilter((prev) => [...prev, e.target.parentElement.textContent]);
    }
  };

  return (
    <StyledDiv>
      <div className="filter">
        <div className="filter__content">
          <form id="formFilter" className="filter__content--check">
            {types &&
              types.map((type, idx) => {
                return (
                  <Checkbox
                    key={idx}
                    label={type.name}
                    onChange={(e) => handleChange(e)}
                  />
                );
              })}
          </form>
          <div className="filter__content--clear"></div>
        </div>
        <div className="filter__title">
          <p>Filter</p>
        </div>
      </div>
    </StyledDiv>
  );
};

export default Filter;
