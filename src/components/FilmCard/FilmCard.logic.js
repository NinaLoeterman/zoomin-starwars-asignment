import React, { useEffect, useState } from "react";

const useFilmCard = (film, isHistory) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHistoricalFavorite, setIsHistoricallyFavorite] = useState(false);

  useEffect(() => {
    const favoriteFromStorage = localStorage.getItem(film.episode_id);
    if (!isHistory && favoriteFromStorage) {
      setIsFavorite(true);
      setIsHistoricallyFavorite(true);
    }
  }, [film]);

  const saveToFavorites = () => {
    localStorage.setItem(film.episode_id, "saved");
    saveToStorageHistory();
  };
  const deleteFromFavorites = () => {
    localStorage.removeItem(film.episode_id);
    setIsHistoricallyFavorite(false);
  };

  const saveToStorageHistory = () => {
    const fullHistory = localStorage.getItem("fullHistory");
    if (!fullHistory) {
      localStorage.setItem("fullHistory", JSON.stringify(film));
    } else {
      const parsedHistory = JSON.parse(fullHistory);
      const tempHistory = [];
      if (parsedHistory.length) {
        parsedHistory.forEach((item) => {
          tempHistory.push(item);
        });
      }
      tempHistory.push(film);
      localStorage.setItem("fullHistory", JSON.stringify(tempHistory));
    }
  };

  const toggleIsFavorite = () => {
    if (!isFavorite) {
      saveToFavorites();
    } else {
      deleteFromFavorites();
    }
    setIsFavorite(!isFavorite);
  };

  return { toggleIsFavorite, isFavorite, isHistoricalFavorite };
};

export default useFilmCard;
