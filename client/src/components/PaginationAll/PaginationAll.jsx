import { Link } from "react-router-dom";
import { StyledDiv } from "./styled";

/* eslint-disable jsx-a11y/anchor-is-valid */
const PaginationAll = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <StyledDiv>
      <div className="pagination">
        {pageNumbers &&
          pageNumbers.map((number, idx) => (
            <Link
              to={"#"}
              className="pagination__link"
              key={idx}
              onClick={() => paginate(number)}
            >
              <div>
                <p> {number}</p>
              </div>
            </Link>
          ))}
      </div>
    </StyledDiv>
  );
};

export default PaginationAll;
