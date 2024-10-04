//-------------------Basic imports:-------------------
import React from "react";
import "./Modal.scss";

//----------------Libraries---------------------------
import clsx from "clsx";

//-----------------Assets-------------------------------
import ICONS from "../../assets/icons";

const Modal = ({
  children,
  visible,
  onClosePopup,
  closeBtn = false,
  className,
}) => {
  //-------------Layout:-----------------------------------
  return (
    <div className={clsx("modal", visible && "modal__active", className)}>
      <div className="modal__content">
        {closeBtn && (
          <button className="modal__close" onClick={onClosePopup}>
            {ICONS.utils.close}
          </button>
        )}
        {children}
      </div>
    </div>
  );
};

export default Modal;
