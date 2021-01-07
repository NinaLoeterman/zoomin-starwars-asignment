import React, { useEffect } from "react";
import "./App.css";
import { getFilms } from "./apiService/ApiService";

function App() {
  useEffect(() => {
    getFilms();
  }, []);
  return (
    <div className="App">
      <div>its workin</div>
    </div>
  );
}

export default App;
