// import React from "react";
import Articles from "./components/Articles/Articles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./About";

const App = () => {
  return (
    // <div style={{ padding: "20px 40px", backgroundColor: "aaaaaa" }}>
    <Router>
      <Routes>
        <Route path="/" exact={true}>
          <Articles />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Routes>
    </Router>
    // </div>
  );
};

export default App;
