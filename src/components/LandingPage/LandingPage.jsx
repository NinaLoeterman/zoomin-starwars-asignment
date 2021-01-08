import React from "react";
import "./LandingPage.styles.css";
import Button from "../UI/Button/Button.jsx";
import { useHistory } from "react-router-dom";

const LandingPage = () => {
  const history = useHistory();
  
  const text = { force: "May The Force Be With You" };

  const navigateToFilms = () => {
    history.push("/films");
  };

  return (
    <div className={"LandingPage"}>
      <Button large title={text.force} onClick={navigateToFilms} />
    </div>
  );
};

export default LandingPage;
