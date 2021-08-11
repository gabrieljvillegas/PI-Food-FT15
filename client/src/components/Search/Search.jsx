import { StyledDiv } from "./styled";
import { useState, useEffect } from "react";
import { filterByName } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const Search = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState([]);

  const handleChange = (e) => {
    setSearch(() => e.target.value);
  };

  useEffect(() => {
    dispatch(filterByName(search));
  }, [dispatch, search]);

  return (
    <StyledDiv>
      <div className="search">
        <form className="search__form" action="">
          <input
            className="search__form--input"
            type="text"
            autoComplete="off"
            placeholder="Ingrese nombre"
            onChange={(e) => handleChange(e)}
          />
        </form>
      </div>
    </StyledDiv>
  );
};

export default Search;
