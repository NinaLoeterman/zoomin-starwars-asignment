import React from "react";
import "./App.css";
import { BrowserRouter as BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import FilmPage from './components/FilmPage/FilmPage.jsx';

function App() {

  return (
    <div className="App">
      <BrowserRouter basename="/https://ninaloeterman.github.io/zoomin-starwars-asignment">
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/films">
            <FilmPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
