import React, { useEffect } from "react";
import "./App.css";
import { getFilms } from "./apiService/ApiService";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";

function App() {
  useEffect(() => {
    getFilms();
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <LandingPage />
          </Route>
          <Route path="/films">
            <div></div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
