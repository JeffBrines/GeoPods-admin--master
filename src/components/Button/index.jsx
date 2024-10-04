//---------------------Basic imports-----------------------
import React from "react";
import "./Button.scss";

const Button = ({ children, onClick, type = "button" }) => {
  //---------------------Layout-----------------------

  return (
    <button type={type} className="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
