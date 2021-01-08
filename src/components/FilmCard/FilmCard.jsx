import React, { useEffect, useState } from "react";
import "./FilmCard.styles.css";
import FavoriteIcon from "../UI/icons/FavoriteIcon.jsx";

const FilmCard = ({ film = {} }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    //check local storage for saved films
    //setFavorite
  }, []);

  const toggleIsFavorite = () => {
      setIsFavorite(!isFavorite);
  }

  return (
    <div className={`FilmCard ${isFavorite && "FilmCard_favorite"}`}>
      <div className={'FilmCard_title'}>{film.title}</div>
      <div className={"FilmCard_icon_wrapper"} onClick={toggleIsFavorite}>
        <FavoriteIcon isFavorite={isFavorite} />
      </div>
    </div>
  );
};

export default FilmCard;
