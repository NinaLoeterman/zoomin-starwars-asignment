import React, { useEffect, useState } from "react";

const useFilmCard = (film, isHistory) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHistoricalFavorite, setIsHistoricallyFavorite] = useState(false);

  useEffect(() => {
    checkFavorites();
  }, [film]);

  const checkFavorites = () => {
    try {
      const favoriteFromStorage = localStorage.getItem(film.episode_id);
      if (!isHistory && favoriteFromStorage) {
        setIsFavorite(true);
        setIsHistoricallyFavorite(true);
      }
    } catch (e) {
      console.error("error getting item from local storage", e);
    }
  };

  const saveToFavorites = () => {
    try {
      localStorage.setItem(film.episode_id, "saved");
      saveToStorageHistory();
    } catch (e) {
      alert("There was a saving your favorite film");
    }
  };
  const deleteFromFavorites = () => {
    try {
      localStorage.removeItem(film.episode_id);
      setIsHistoricallyFavorite(false);
    } catch (e) {
      alert("There was a deleting the film");
    }
  };

  const saveToStorageHistory = () => {
    try {
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
    } catch (e) {
      alert("There was a problem saving to storage history");
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
