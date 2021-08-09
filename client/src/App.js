import { Route } from "react-router-dom";
import LandingPage from "./containers/LandingPage/LandingPage";
import Nav from "./containers/Nav/Nav";
import Home from "./containers/Home/Home";

function App() {
  return (
    <div>
      <Route exact path="/" component={LandingPage} />

      <Route path={["/home", "/recipes/:id", "/create"]}>
        <Nav />
      </Route>

      <Route path="/home">
        <Home />
      </Route>
    </div>
  );
}

export default App;
