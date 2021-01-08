import React from "react";
import "./FilmCard.styles.css";
import FavoriteIcon from "../UI/icons/FavoriteIcon.jsx";
import TagIcon from "../UI/icons/TagIcon.jsx";
import useFilmCard from "./FilmCard.logic";

const FilmCard = ({ film = {} }) => {
  const { toggleIsFavorite, isFavorite, isHistoricallFavorite } = useFilmCard(
    film
  );

  return (
    <div className={`FilmCard ${isFavorite && "FilmCard_favorite"}`}>
      <div className={"FilmCard_icon_wrapper"} onClick={toggleIsFavorite}>
        {isHistoricallFavorite && isFavorite && <TagIcon />}
        <FavoriteIcon isFavorite={isFavorite} />
      </div>
      <div className={"FilmCard_title"}>{film.title}</div>
    </div>
  );
};

export default FilmCard;
