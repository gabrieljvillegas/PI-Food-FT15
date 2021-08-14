import { Route } from "react-router-dom";
import LandingPage from "./containers/LandingPage/LandingPage";
import Nav from "./containers/Nav/Nav";
import Home from "./containers/Home/Home";
import RecipeDetail from "./Pages/RecipeDetail/RecipeDetail";
import CreateRecipe from "./Pages/CreateRecipe/CreateRecipe";

function App() {
  return (
    <div>
      <Route exact path="/" component={LandingPage} />
      <Route
        path={["/home", "/recipeDetail/:id", "/createRecipe"]}
        component={Nav}
      />
      <Route exact path="/home" component={Home} />
      <Route exact path="/recipeDetail/:id" component={RecipeDetail} />
      <Route exact path="/createRecipe" component={CreateRecipe} />
    </div>
  );
}

export default App;
