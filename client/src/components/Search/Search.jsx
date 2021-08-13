import { StyledDiv } from "./styled";
import { useState } from "react";
import { getNameRecipes } from "../../redux/actions";
import { useDispatch } from "react-redux";

const Search = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState([]);

  const handleChange = (e) => {
    setSearch(() => e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getNameRecipes(search));
  };

  return (
    <StyledDiv>
      <div className="search">
        <form className="search__form" onSubmit={(e) => handleSubmit(e)}>
          <input
            className="search__form--input"
            type="text"
            autoComplete="off"
            placeholder="Ingrese nombre"
            onChange={(e) => handleChange(e)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </StyledDiv>
  );
};

export default Search;
