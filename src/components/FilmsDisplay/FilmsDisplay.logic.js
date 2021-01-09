import React, { useState, useEffect } from "react";
import { getFilms } from "../../apiService/ApiService";

const useFilmsDisplay = () => {
  const [films, setFilms] = useState([]);
  const [favoritesHistory, setFavoritesHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  const text = {
    films: "Back to Films",
    history: "Full History of Favorites"
  }

  const getFilmsFromAPI = async () => {
    const tempFilms = await getFilms();
    if (tempFilms.res) {
      setFilms(tempFilms.res);
    } else return;
  };

  const toggleHistory = () => {
    if (!showHistory) {
      getFavoritesHistory();
    }
    setShowHistory(!showHistory);
  };

  const getFavoritesHistory = () => {
    try {
      const fullHistory = localStorage.getItem("fullHistory");
      const parsedHistory = JSON.parse(fullHistory);
      if (!parsedHistory) return;
      if (Array.isArray(parsedHistory)) {
        setFavoritesHistory(parsedHistory);
      } else {
        setFavoritesHistory([parsedHistory]);
      }
    } catch (e) {
      alert("There was an error retrieving favorites history");
    }
  };

  useEffect(() => {
    getFilmsFromAPI();
  }, []);
  return { films, favoritesHistory, toggleHistory, showHistory, text };
};

export default useFilmsDisplay;
