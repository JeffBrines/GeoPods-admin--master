//---------------Basic imports-----------------------
import React from "react";
import styles from "./styles.module.scss";

//---------------Assets------------------------------
import ICONS from "../../assets/icons";

const PodcastReportItem = ({ deletePod, config, report, setChoosePodcast }) => {
  const deleteThis = () => {
    deletePod.toggleModal();
    setChoosePodcast(report);
  };
  console.log(report);
  return (
    <div className={styles.admin__item}>
      <audio
        controls
        src={report.suspectPodcast.url}
        style={{ width: "150px" }}
      >
        Your browser does not support the
        <code>audio</code> element.
      </audio>
      <div className={styles.admin__name}>{report.from.name}</div>
      <div className={styles.admin__name}>{report.message}</div>
      <div className={styles.admin__name}>
        <div> {report.suspectPodcast.creator.name}</div>
        <div>{report.suspectPodcast._id} </div>
        <div>{report.suspectPodcast.creator.email} </div>
      </div>
      <div className={styles.admin__info}>
        <div className={styles.admin__setting}>
          <div className={styles.admin__settingOptions}>
            <button onClick={deleteThis}>{ICONS.utils.delete}</button>
          </div>
          {ICONS.utils.more}
        </div>
      </div>
    </div>
  );
};

export default PodcastReportItem;
