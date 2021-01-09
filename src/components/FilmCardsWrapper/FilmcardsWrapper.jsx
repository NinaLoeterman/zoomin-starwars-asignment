import React from "react";
import FilmCard from '../FilmCard/FilmCard.jsx';
import './FilmCardsWrapper.styles.css';

const FilmCardsWrapper = ({films, isHistory}) => {
  return (
    <div className={"FilmCardsWrapper"}>
      {films?.length > 0
        ? films.map((film, index) => <FilmCard isHistory={isHistory} key={index} film={film} />)
        : (
            <div className={"FilmsDisplay_loading"}>Loading...</div>
          )}
    </div>
  );
};

export default FilmCardsWrapper;
