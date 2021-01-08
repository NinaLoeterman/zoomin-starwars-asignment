import React from "react";
import "./FilmPage.styles.css";
import FilmsDisplay from "../FilmsDisplay/FilmsDisplay.jsx";

const FilmPage = () => {
  const text = {
    title: "Star Wars Films",
  };
  return (
    <div className={"FilmPage"}>
      <div className={"FilmPage_content"}>
        <div className={"FilmPage_title_wrapper"}>
          <div className={"FilmPage_title"}>{text.title}</div>
        </div>
        <div className={'FilmPage_FilmsDisplay_wrapper'}>
          <FilmsDisplay />
        </div>
      </div>
    </div>
  );
};

export default FilmPage;
