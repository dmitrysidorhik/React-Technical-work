import React from "react";
import Articles from "./components/Articles/Articles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./About";

const App = () => {
  return (
    // <div style={{ padding: "20px 40px", backgroundColor: "aaaaaa" }}>
    <Router>
      <Switch>
        <Route path="/" exact={true}>
          <Articles />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
      </Switch>
    </Router>
    // </div>
  );
};

export default App;
