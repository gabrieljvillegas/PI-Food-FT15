import { StyledDiv } from "./styled";
import { useState } from "react";
import { getNameRecipes } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const Search = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState();

  function handleChange(e) {
    return setSearch(() => e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.length) {
      dispatch(getNameRecipes(search));
    }
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
          <button type="submit">Submit</button>
        </form>
      </div>
    </StyledDiv>
  );
};

export default Search;
