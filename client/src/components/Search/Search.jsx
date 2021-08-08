import { StyledDiv } from "./styled";
import { useState } from "react";
import { getNameRecipes, changeFlag } from "../../redux/actions";
import { useDispatch } from "react-redux";

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

  const handleFlag = (e) => {
    dispatch(changeFlag(false));
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
          <button type="submit" className="search__form--btn">
            Buscar
          </button>
          <button
            type="reset"
            className="search__form--btn"
            onClick={(e) => handleFlag(e)}
          >
            Mostrar Todas
          </button>
        </form>
      </div>
    </StyledDiv>
  );
};

export default Search;
