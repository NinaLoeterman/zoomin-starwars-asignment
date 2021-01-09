import React from "react";
import FilmCard from '../FilmCard/FilmCard.jsx';

const FilmCards = ({films, isHistory}) => {
  return (
    <div className={"FilmsDisplay"}>
      {films?.length > 0
        ? films.map((film, index) => <FilmCard isHistory={isHistory} key={index} film={film} />)
        : (
            <div className={"FilmsDisplay_loading"}>Loading...</div>
          )}
    </div>
  );
};

export default FilmCards;
