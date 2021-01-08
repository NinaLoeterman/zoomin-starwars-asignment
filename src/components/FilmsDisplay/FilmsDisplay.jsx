import React from "react";
import useFilmsDisplay from "./FilmsDisplay.logic";
import FilmCard from "../FilmCard/FilmCard.jsx";
import "./FilmsDisplay.styles.css";

const FilmsDisplay = () => {
  const { films } = useFilmsDisplay();

  return (
    <div className={"FilmsDisplay"}>
      {films.length > 0 ? (
        films.map((film) => <FilmCard key={film.episode_id} film={film} />)
      ) : (
        <div className={"FilmsDisplay_loading"}>Loading...</div>
      )}
    </div>
  );
};

export default FilmsDisplay;
