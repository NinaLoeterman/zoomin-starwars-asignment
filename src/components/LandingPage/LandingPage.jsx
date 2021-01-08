import React from "react";
import "./LandingPage.styles.css";
import Button from "../UI/Button/Button.jsx";

const LandingPage = () => {
  const text = { force: "May the force be with you" };
  return (
    <div className={"LandingPage"}>
      <Button large title={text.force} />
    </div>
  );
};

export default LandingPage;
