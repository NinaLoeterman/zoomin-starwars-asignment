import axios from "axios";

const getFilms = async () => {
  try {
    const films = await axios.get("https://swapi.dev/api/films");
    return { res: films.data.results };
  } catch (e) {
    return { err: e };
  }
};

export { getFilms };
