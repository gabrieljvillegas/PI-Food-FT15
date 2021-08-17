import { StyledDiv } from "./styled";
import { Link } from "react-router-dom";
import imageLogo from "../../images/wikifood.jpg";

const LandingPage = () => {
  return (
    <StyledDiv>
      <div className="landing container">
        <div className="landing__welcome">
          <img src={imageLogo} alt="" />
        </div>
        <div className="landing__links">
          <Link className="landing__links--link" to="/home">
            <h2>Enter</h2>
          </Link>
        </div>
      </div>
    </StyledDiv>
  );
};

export default LandingPage;
