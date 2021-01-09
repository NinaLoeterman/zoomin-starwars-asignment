import React from "react";
import useFilmsDisplay from "./FilmsDisplay.logic";
import "./FilmsDisplay.styles.css";
import Button from "../UI/Button/Button.jsx";
import FilmCardsWrapper from "../FilmCardsWrapper/FilmcardsWrapper.jsx";

const FilmsDisplay = () => {
  const {
    films,
    favoritesHistory,
    toggleHistory,
    showHistory,
    text
  } = useFilmsDisplay();

  return (
    <div className={"FilmsDisplay"}>
      <div className={"FilmsDisplay_button_wrapper"}>
        <Button
          onClick={toggleHistory}
          title={showHistory ? text.films : text.history}
        />
      </div>
      <div>
        <FilmCardsWrapper
          isHistory={showHistory}
          films={showHistory ? favoritesHistory : films}
        />
      </div>
    </div>
  );
};

export default FilmsDisplay;
