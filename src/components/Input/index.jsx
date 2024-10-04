//---------------------Basic imports-----------------------
import React from "react";
import "./Input.scss";

//--------------------Libraries----------------------------
import clsx from "clsx";

const Input = ({
  value,
  onChange,
  error,
  placeholder,
  name,
  formHelper,
  type = "text",
}) => {
  //---------------------Handlers--------------------

  const changeHandler = (e) =>
    formHelper
      ? onChange(e.target.name, e.target.value)
      : onChange(e.target.value);

  //---------------------Layout-----------------------

  return (
    <div className={clsx("input", error && "input_error")}>
      <input
        type={type}
        className="inputArea"
        name={name}
        value={value}
        onChange={changeHandler}
        placeholder={placeholder}
      />
      <span className="error">{error}</span>
    </div>
  );
};

export default Input;
