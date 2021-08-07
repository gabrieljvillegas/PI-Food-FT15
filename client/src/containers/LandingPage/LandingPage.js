import { StyledDiv } from "./styled";
import { Link } from "react-router-dom";
import imageLogo from "../../images/wikifood.jpg";

const LandingPage = () => {
  return (
    <StyledDiv>
      <div class="landing container">
        <div class="landing__welcome">
          <img src={imageLogo} alt="" />
        </div>
        <div class="landing__links">
          <Link class="landing__links--link" to="/home">
            <h2>Entrar</h2>
          </Link>
        </div>
      </div>
    </StyledDiv>
  );
};

export default LandingPage;
