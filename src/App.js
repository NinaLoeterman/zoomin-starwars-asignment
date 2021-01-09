import React from "react";
import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import FilmPage from './components/FilmPage/FilmPage.jsx';

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/films">
            <FilmPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
