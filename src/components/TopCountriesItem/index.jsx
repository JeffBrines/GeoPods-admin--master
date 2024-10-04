//---------------Basic imports-----------------------
import React from "react";
import styles from "./styles.module.scss";

const TopCountriesItem = ({ item }) => {
  console.log(item);

  if (!item) return null;

  return (
    <div className={styles.admin__item}>
      <div className={styles.admin__name}>{item._id ? item._id : "-----"}</div>
      <div className={styles.admin__count}>
        {item.count ? item.count : "-----"}
      </div>
    </div>
  );
};

export default TopCountriesItem;
