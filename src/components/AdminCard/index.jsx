//---------------Basic imports-----------------------
import React from "react";
import styles from "./styles.module.scss";

//---------------Assets------------------------------
import ICONS from "../../assets/icons";

const AdminItem = ({ config, admin, setChooseAdmin }) => {
  const deleteAdmin = () => {
    config.toggleModal();
    setChooseAdmin(admin);
  };

  return (
    <div className={styles.admin__item}>
      <div className={styles.admin__name}>{admin.login}</div>
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

export default AdminItem;
