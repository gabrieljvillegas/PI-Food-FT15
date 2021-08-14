import { StyledDiv } from "./styled";
import Recipes from "../Recipes/Recipes";
import Sidebar from "../Sidebar/Sidebar";
import PaginationAll from "../../components/PaginationAll/PaginationAll";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipes } from "../../redux/actions";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();

  const recipesSearch = useSelector((state) => state.recipesSearch);

  const [loading, setLoading] = useState(false);
  const [currentPageAll, setCurrentPageAll] = useState(1);
  const [postsPerPage] = useState(9);

  useEffect(() => {
    setLoading(true);
    dispatch(getAllRecipes());
    setLoading(false);
  }, [dispatch]);

  const indexOfLastPostFilter = currentPageAll * postsPerPage;
  const indexOfFirstPostFilter = indexOfLastPostFilter - postsPerPage;
  const currentPostsFilter = recipesSearch.slice(
    indexOfFirstPostFilter,
    indexOfLastPostFilter
  );
  const paginates = (pageNumber) => setCurrentPageAll(pageNumber);

  return (
    <StyledDiv>
      <Sidebar />
      <div>
        {recipesSearch.length ? (
          <div className="home container">
            <div className="home__pagination">
              <PaginationAll
                postsPerPage={postsPerPage}
                totalPosts={recipesSearch.length}
                paginate={paginates}
              />
            </div>
            <div className="home__recipes">
              <Recipes recipes={currentPostsFilter} loading={loading} />
            </div>
          </div>
        ) : (
          <div className="home container">
            <p>Cargando... desde el home</p>
          </div>
        )}
        <Link to={"/createRecipe"} className="btn-create">
          Add <br /> Recipe
        </Link>
      </div>
    </StyledDiv>
  );
};

export default Home;
