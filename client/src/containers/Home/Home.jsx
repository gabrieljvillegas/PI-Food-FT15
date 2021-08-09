import { StyledDiv } from "./styled";
import Recipes from "../Recipes/Recipes";
import Sidebar from "../Sidebar/Sidebar";

const Home = () => {
  return (
    <StyledDiv>
      <Sidebar />
      <Recipes />
    </StyledDiv>
  );
};

export default Home;
