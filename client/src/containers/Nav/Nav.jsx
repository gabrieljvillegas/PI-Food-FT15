import { StyledDiv } from "./styled";
import imageLogo from "../../images/wikifood.jpg";
import Search from "../../components/Search/Search";

const Nav = () => {
  return (
    <StyledDiv>
      <div className="nav container">
        <div className="nav__logo">
          <img src={imageLogo} alt="" />
        </div>
        <div className="nav__search">
          <Search />
        </div>
      </div>
    </StyledDiv>
  );
};

export default Nav;
