import React from "react";
import "./FilmCard.styles.css";
import FavoriteIcon from "../UI/icons/FavoriteIcon.jsx";
import TagIcon from "../UI/icons/TagIcon.jsx";
import useFilmCard from "./FilmCard.logic";

const FilmCard = ({ film = {}, isHistory = false }) => {
  const { toggleIsFavorite, isFavorite, isHistoricalFavorite } = useFilmCard(
    film, isHistory
  );

  return (
    <div className={`FilmCard ${isFavorite && !isHistory && "FilmCard_favorite"}`}>
      <div className={"FilmCard_content"}>
        {!isHistory && <div className={"FilmCard_icon_wrapper"} onClick={toggleIsFavorite}>
          {isHistoricalFavorite && isFavorite && <TagIcon />}
          <FavoriteIcon isFavorite={isFavorite} />
        </div>}
        <div className={"FilmCard_text_wrapper"}>
          <div className={"FilmCard_title"}>{film.title}</div>
          <div className={"FilmCard_opening_crawl"}>{film.opening_crawl}</div>
        </div>
      </div>
    </div>
  );
};

export default FilmCard;
