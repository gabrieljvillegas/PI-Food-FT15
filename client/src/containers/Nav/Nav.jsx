import { StyledDiv } from "./styled";
import { Link, Route } from "react-router-dom";
import imageLogo from "../../images/wikifood.jpg";
import Search from "../../components/Search/Search";

const Nav = () => {
  return (
    <StyledDiv>
      <div className="nav container">
        <div className="nav__logo">
          <img src={imageLogo} alt="" />
        </div>
        <div className="nav__back">
          <Route path={["/recipeDetail", "/createRecipe"]}>
            <Link className="nav__back--link" to={"/home"}>
              Volver
            </Link>
          </Route>
        </div>
        <div className="nav__search">
          <Route path={"/home"}>
            <Search />
          </Route>
        </div>
      </div>
    </StyledDiv>
  );
};

export default Nav;
