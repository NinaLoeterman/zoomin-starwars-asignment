import React, { useState, useEffect } from "react";
import { getFilms } from "../../apiService/ApiService";

const useFilmsDisplay = () => {
  const [films, setFilms] = useState([]);
  const [favoritesHistory, setFavoritesHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

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
    const fullHistory = localStorage.getItem("fullHistory");
    const parsedHistory = JSON.parse(fullHistory);
    if (!parsedHistory) return;
    if (Array.isArray(parsedHistory)) {
      setFavoritesHistory(parsedHistory);
    } else {
      setFavoritesHistory([parsedHistory])
    }
  };

  useEffect(() => {
    getFilmsFromAPI();
  }, []);
  return { films, favoritesHistory, toggleHistory, showHistory };
};

export default useFilmsDisplay;
