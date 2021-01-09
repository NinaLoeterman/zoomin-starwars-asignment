import React from "react";
import useFilmsDisplay from "./FilmsDisplay.logic";
import FilmCard from "../FilmCard/FilmCard.jsx";
import "./FilmsDisplay.styles.css";
import Button from "../UI/Button/Button.jsx";
import FilmCards from '../FilmCards/Filmcards.jsx';

const FilmsDisplay = () => {
  const {
    films,
    favoritesHistory,
    toggleHistory,
    showHistory,
  } = useFilmsDisplay();

  return (
    <div>
      <Button
        onClick={toggleHistory}
        title={showHistory ? "Back To Films" : "Full History"}
      />
      <div className={"FilmsDisplay"}>
       <FilmCards isHistory={showHistory} films={showHistory ? favoritesHistory : films}/>
      </div>
    </div>
  );
};

export default FilmsDisplay;
