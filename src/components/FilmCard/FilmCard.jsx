import React, { useEffect, useState } from "react";
import "./FilmCard.styles.css";
import FavoriteIcon from "../UI/icons/FavoriteIcon.jsx";

const FilmCard = ({ film = {} }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favoriteFromStorage = localStorage.getItem(film.episode_id)
    if(favoriteFromStorage) setIsFavorite(true);
  }, [film]);

  const saveToFavorites = () => {
    localStorage.setItem(film.episode_id, "saved");
  }
  const deleteFromFavorites = () => {
    localStorage.removeItem(film.episode_id);
  }

  const toggleIsFavorite = () => {
      if(!isFavorite) {
        saveToFavorites();
      } else {
        deleteFromFavorites();
      }
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
