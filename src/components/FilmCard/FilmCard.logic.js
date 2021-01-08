import React, { useEffect, useState } from "react";

const useFilmCard = (film) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favoriteFromStorage = localStorage.getItem(film.episode_id);
    if (favoriteFromStorage) setIsFavorite(true);
  }, [film]);

  const saveToFavorites = () => {
    localStorage.setItem(film.episode_id, "saved");
  };
  const deleteFromFavorites = () => {
    localStorage.removeItem(film.episode_id);
  };

  const toggleIsFavorite = () => {
    if (!isFavorite) {
      saveToFavorites();
    } else {
      deleteFromFavorites();
    }
    setIsFavorite(!isFavorite);
  };

  return { toggleIsFavorite, isFavorite };
};

export default useFilmCard;
