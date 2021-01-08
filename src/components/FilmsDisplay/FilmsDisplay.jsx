import React from "react";
import useFilmsDisplay from "./FilmsDisplay.logic";
import FilmCard from "../FilmCard/FilmCard.jsx";
import './FilmsDisplay.styles.css';

const FilmsDisplay = () => {
  const { films } = useFilmsDisplay();
  console.log("films", films);

  return (
    <div className={"FilmsDisplay"}>
      {films && films.map((film) => <FilmCard film={film} />)}
    </div>
  );
};

export default FilmsDisplay;
