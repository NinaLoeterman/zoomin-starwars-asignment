import React from "react";
import useFilmsDisplay from "./FilmsDisplay.logic";
import FilmCard from "../FilmCard/FilmCard.jsx";
import "./FilmsDisplay.styles.css";
import Button from '../UI/Button/Button.jsx';

const FilmsDisplay = () => {
  const { films } = useFilmsDisplay();

  return (
    <div>
      <Button title={"Full History"}></Button>
      <div className={"FilmsDisplay"}>
        {films.length > 0 ? (
          films.map((film) => <FilmCard key={film.episode_id} film={film} />)
        ) : (
          <div className={"FilmsDisplay_loading"}>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default FilmsDisplay;
