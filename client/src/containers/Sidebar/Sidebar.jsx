import { StyledDiv } from "./styled";

import Filter from "../../components/Filter/Filter";

const Sidebar = () => {
  return (
    <StyledDiv>
      <div className="filter">
        <Filter />
      </div>
    </StyledDiv>
  );
};

export default Sidebar;
