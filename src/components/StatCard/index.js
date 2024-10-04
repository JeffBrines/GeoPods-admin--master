import React from "react";
import styles from "./styles.module.scss";

const StatCard = ({ title, info }) => {
  return (
    <div className={styles.overview}>
      <div className={styles.overview__case}>
        <div className={styles.overview__caseItem}>
          <h3>{title}</h3>
          <h2>{info}</h2>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
