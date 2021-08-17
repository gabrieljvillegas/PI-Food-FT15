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
  const recipes = useSelector((state) => state.recipes);

  const [currentPageAll, setCurrentPageAll] = useState(1);
  const [postsPerPage] = useState(9);

  useEffect(() => {
    dispatch(getAllRecipes());
  }, [dispatch]);

  const indexOfLastPostAll = currentPageAll * postsPerPage;
  const indexOfFirstPostAll = indexOfLastPostAll - postsPerPage;
  const currentPostsAll = recipes.slice(
    indexOfFirstPostAll,
    indexOfLastPostAll
  );

  const indexOfLastPostSearch = currentPageAll * postsPerPage;
  const indexOfFirstPostSearch = indexOfLastPostSearch - postsPerPage;
  const currentPostsSearch = recipesSearch.slice(
    indexOfFirstPostSearch,
    indexOfLastPostSearch
  );

  const paginates = (pageNumber) => setCurrentPageAll(pageNumber);

  return (
    <StyledDiv>
      <Sidebar />
      <div>
        {recipesSearch.length ? (
          typeof recipesSearch === "string" ? (
            <div className="centerText">
              <p>{recipesSearch}</p>
            </div>
          ) : (
            <div className="home container">
              <div className="home__pagination">
                <PaginationAll
                  postsPerPage={postsPerPage}
                  totalPosts={recipesSearch.length}
                  paginate={paginates}
                />
              </div>
              <div className="home__recipes">
                <Recipes recipes={currentPostsSearch} />
              </div>
            </div>
          )
        ) : recipes.length ? (
          <div className="home container">
            <div className="home__pagination">
              <PaginationAll
                postsPerPage={postsPerPage}
                totalPosts={recipes.length}
                paginate={paginates}
              />
            </div>
            <div className="home__recipes">
              <Recipes recipes={currentPostsAll} />
            </div>
          </div>
        ) : (
          <div className="loader"></div>
        )}

        <Link to={"/createRecipe"} className="btn-create">
          Add <br /> Recipe
        </Link>
      </div>
    </StyledDiv>
  );
};

export default Home;
