import React, { useState, useEffect } from "react";
import { getFilms } from "../../apiService/ApiService";

const useFilmsDisplay = () => {
  const [films, setFilms] = useState([]);

  const getFilmsFromAPI = async () => {
    const tempFilms = await getFilms();
    if (tempFilms.res) {
      setFilms(tempFilms.res);
    } else return;
  };

  useEffect(() => {
    getFilmsFromAPI();
  }, []);
  return { films };
};

export default useFilmsDisplay;
