import React from "react";
import "./App.css";
import Front from "./comps/Front";
import Contact from "./comps/Contact";
import Projects from "./comps/Projects";

/* Projects */
import RIV from "./comps/riv/RIV";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Front} />
          <Route path="/nesan/" exact component={Front} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects" component={Projects} />
          <Route path="/riv" component={RIV} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
