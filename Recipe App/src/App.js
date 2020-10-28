import Home from "./components/HomeComponent";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
