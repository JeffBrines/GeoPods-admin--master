//---------------Basic imports-----------------------
import React from "react";
import styles from "./styles.module.scss";

const TopUserItem = ({ user }) => {
  return (
    <div className={styles.admin__item}>
      <div className={styles.admin__name}>{user.userName}</div>
    </div>
  );
};

export default TopUserItem;
