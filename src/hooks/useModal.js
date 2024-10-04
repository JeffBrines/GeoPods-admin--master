import { useState } from "react";

const useModal = () => {
  const [isShow, setIsShow] = useState(false);

  const toggleModal = () => {
    isShow ? setIsShow(false) : setIsShow(true);
  };

  return { isShow, toggleModal };
};

export default useModal;
