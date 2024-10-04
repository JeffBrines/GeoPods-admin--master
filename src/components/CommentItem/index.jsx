//---------------Basic imports-----------------------
import React from "react";
import styles from "./styles.module.scss";

//---------------Assets------------------------------
import ICONS from "../../assets/icons";

const CommentItem = ({ deletePod, config, report, setChooseComment }) => {
  const deleteAdmin = () => {
    deletePod.toggleModal();
    setChooseComment(report);
  };

  return (
    <div className={styles.admin__item}>
      <div className={styles.admin__name}>
        {report.from?.name ? report.from?.name : "-------"}
      </div>
      <div className={styles.admin__name}>{report.message}</div>
      <div className={styles.admin__name}>
        {report.suspectReview?.podcast._id
          ? report.suspectReview?.podcast._id
          : "-----------"}
      </div>
      <div className={styles.admin__info}>
        <div className={styles.admin__setting}>
          <div className={styles.admin__settingOptions}>
            <button onClick={deleteAdmin}>{ICONS.utils.delete}</button>
          </div>
          {ICONS.utils.more}
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
