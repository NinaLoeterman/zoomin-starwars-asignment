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
      if (Array.isArray(parsedHistory)) {
        parsedHistory.forEach((item) => {
          tempHistory.unshift(item);
        });
      } else {
        tempHistory.unshift(parsedHistory);
      }
      tempHistory.unshift(film);
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
