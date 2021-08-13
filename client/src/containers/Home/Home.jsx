import { StyledDiv } from "./styled";
import Recipes from "../Recipes/Recipes";
import Sidebar from "../Sidebar/Sidebar";
import PaginationAll from "../../components/PaginationAll/PaginationAll";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipes } from "../../redux/actions";

const Home = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);

  const recipesSearch = useSelector((state) => state.recipesSearch);

  const [loading, setLoading] = useState(false);
  const [currentPageAll, setCurrentPageAll] = useState(1);
  const [postsPerPage] = useState(9);

  useEffect(() => {
    setLoading(true);
    dispatch(getAllRecipes());
    setLoading(false);
  }, [dispatch]);

  //PAGINACION PARA TODAS LAS RECETAS
  const indexOfLastPostAll = currentPageAll * postsPerPage;
  const indexOfFirstPostAll = indexOfLastPostAll - postsPerPage;
  const currentPostsAll = recipes.slice(
    indexOfFirstPostAll,
    indexOfLastPostAll
  );
  const paginate = (pageNumber) => setCurrentPageAll(pageNumber);

  //PAGINACION PARA LAS RECETAS BUSCADAS
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
            <div className="home__pagination">
              <PaginationAll
                postsPerPage={postsPerPage}
                totalPosts={recipes.length}
                paginate={paginate}
              />
            </div>
            <div className="home__recipes">
              <Recipes recipes={currentPostsAll} loading={loading} />
            </div>
          </div>
        )}
      </div>
    </StyledDiv>
  );
};

export default Home;
