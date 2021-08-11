import { StyledDiv } from "./styled";

import Filter from "../../components/Filter/Filter";
import Order from "../../components/Order/Order";

const Sidebar = () => {
  return (
    <StyledDiv>
      <div className="filter">
        <Filter />
      </div>
      <div className="order">
        <Order />
      </div>
    </StyledDiv>
  );
};

export default Sidebar;
