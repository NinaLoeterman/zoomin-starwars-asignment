import React from "react";
import useFilmsDisplay from "./FilmsDisplay.logic";
import FilmCard from "../FilmCard/FilmCard.jsx";

const FilmsDisplay = () => {
  const { films } = useFilmsDisplay();
  console.log('films', films);


  return <div>{films && films.map((film) => <FilmCard film={film} />)}</div>;
};

export default FilmsDisplay;
