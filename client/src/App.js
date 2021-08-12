import { Route } from "react-router-dom";
import LandingPage from "./containers/LandingPage/LandingPage";
import Nav from "./containers/Nav/Nav";
import Home from "./containers/Home/Home";
import RecipeDetail from "./Pages/RecipeDetail/RecipeDetail";

function App() {
  return (
    <div>
      <Route exact path="/" component={LandingPage} />
      <Route path={["/home", "/recipeDetail/:id", "/create"]} component={Nav} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/recipeDetail/:id" component={RecipeDetail} />
    </div>
  );
}

export default App;
