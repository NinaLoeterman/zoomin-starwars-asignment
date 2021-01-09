import React from "react";
import "./Button.styles.css";

const Button = ({ title = "", onClick = () => {}, large = false, children }) => {
  return (
    <button
      className={`Button ${large ? "Button_large" : "Button_small"}`}
      onClick={onClick}
    >
      <div>{title}</div>
      {children}
    </button>
  );
};

export default Button;
