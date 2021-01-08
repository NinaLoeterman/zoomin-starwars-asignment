import React from "react";
import "./FilmPage.styles.css";
import FilmsDisplay from '../FilmsDisplay/FilmsDisplay.jsx';

const FilmPage = () => {
  const text = {
    title: "Star Wars Films",
  };
  return (
    <div className={"FilmPage"}>
      <div className={"FilmPage_content"}>
        <div className={"FilmPage_title"}>{text.title}</div>
        <FilmsDisplay />
      </div>
    </div>
  );
};

export default FilmPage;
