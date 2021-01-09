import React, { useEffect, useState } from "react";

const useFilmCard = (film) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHistoricallFavorite, setIsHistoricallyFavorite] = useState(false);

  useEffect(() => {
    const favoriteFromStorage = localStorage.getItem(film.episode_id);
    if (favoriteFromStorage) {
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
      return;
    }
    const parsedHistory = JSON.parse(fullHistory);
    const tempHistory = [];
    if (parsedHistory.length > 0) {
      parsedHistory.forEach((item) => {
        tempHistory.push(item);
      });
    }
    tempHistory.push(film);
    localStorage.setItem("fullHistory", JSON.stringify(tempHistory));
  };

  const toggleIsFavorite = () => {
    if (!isFavorite) {
      saveToFavorites();
    } else {
      deleteFromFavorites();
    }
    setIsFavorite(!isFavorite);
  };

  return { toggleIsFavorite, isFavorite, isHistoricallFavorite };
};

export default useFilmCard;
