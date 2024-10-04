//---------------Basic imports-----------------------
import React, { useState, useEffect } from "react";
import styles from "./CategoryItem.module.scss";

//---------------Assets------------------------------
import ICONS from "../../assets/icons";
import { fetchRequest } from "../../utils";
import { getToken } from "../../utils/localStorage";

const UserItem = ({ user, deletePod, editPod, changePod, setChooseUser }) => {
  const [check, setCheck] = useState(true);

  const changeUser = () => {
    changePod.toggleModal();
    setChooseUser(user);
  };

  const deleteUser = () => {
    deletePod.toggleModal();
    setChooseUser(user);
  };

  const editUser = () => {
    editPod.toggleModal();
    setChooseUser(user);
  };

  const blockUser = async () => {
    const body = {
      userId: user._id,
    };

    const response = await fetchRequest(
      "api/admin/blockUser",
      "POST",
      body,
      false
    );

    if (response.success) {
      setCheck((prev) => !prev);
      console.log("user was blocked");
    }
  };

  const unblockUser = async () => {
    const body = {
      userId: user._id,
    };

    const response = await fetchRequest(
      "api/admin/unblockUser",
      "POST",
      body,
      false
    );

    if (response.success) {
      setCheck((prev) => !prev);
      console.log("user was unblock");
    }
  };
  console.log("user", user);
  console.log("user check", check);
  useEffect(() => {
    setCheck(user.blocked);
  }, [user]);
  return (
    <div className={styles.category__item}>
      <div className={styles.category__name}>{user.userName}</div>
      <div className={styles.category__info}>
        <div className={styles.category__check}>
          <input
            type="checkbox"
            id={user._id}
            checked={check}
            onChange={check ? unblockUser : blockUser}
          />
          <label htmlFor={user._id}></label>
        </div>
        <div className={styles.category__setting}>
          <div className={styles.category__settingOptions}>
            <button onClick={changeUser}>{ICONS.utils.edit}</button>
            <button onClick={editUser}>{ICONS.utils.message}</button>
            <button onClick={deleteUser}>{ICONS.utils.delete}</button>
          </div>
          {ICONS.utils.more}
        </div>
      </div>
    </div>
  );
};

export default UserItem;
