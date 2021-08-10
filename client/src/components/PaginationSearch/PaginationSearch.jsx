import { Link } from "react-router-dom";
import { StyledDiv } from "./styled";

const PaginationSearch = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <StyledDiv>
      <div className="pagination">
        {pageNumbers.map((number, idx) => (
          <Link
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

export default PaginationSearch;
