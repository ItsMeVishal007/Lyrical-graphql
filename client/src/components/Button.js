import React from "react";
import "./Song.css";

const Button = ({ onClick, add, value, BtnFormType, style }) => {
  return (
    <button
      type={BtnFormType ? BtnFormType : "button"}
      onClick={onClick}
      style={style}
      className={!add ? "none" : "addSongs"}
    >
      {value}
    </button>
  );
};

export default Button;
