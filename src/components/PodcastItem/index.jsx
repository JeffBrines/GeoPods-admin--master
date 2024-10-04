//---------------Basic imports-----------------------
import React, { useState } from "react";
import styles from "./VideoItem.module.scss";
import { fetchRequest } from "../../utils";
//---------------Assets------------------------------
import ICONS from "../../assets/icons";

const PodcastItem = ({ editPod, deletePod, podcast, setChoosePodcast }) => {
  const [check, setCheck] = useState(podcast.reviews_enable);
  const deletePodcast = () => {
    deletePod.toggleModal();
    setChoosePodcast(podcast);
  };

  const editPodcast = () => {
    editPod.toggleModal();
    setChoosePodcast(podcast);
  };
  const lock = async () => {
    const body = {
      podcastId: podcast._id,
    };

    const response = await fetchRequest(
      "api/admin/enable-reviews",
      "POST",
      body,
      false
    );

    if (response.success) {
      setCheck((prev) => !prev);
      console.log("comment was blocked");
    }
  };

  const unLock = async () => {
    const body = {
      podcastId: podcast._id,
    };

    const response = await fetchRequest(
      "api/admin/enable-reviews",
      "POST",
      body,
      false
    );

    if (response.success) {
      setCheck((prev) => !prev);
      console.log("comment was unblock");
    }
  };
  return (
    <div className={styles.video__item}>
      <div className={styles.video__contentSection}>
        <audio controls src={podcast.url} style={{ width: "250px" }}>
          Your browser does not support the
          <code>audio</code> element.
        </audio>
      </div>
      <ul className={styles.video__contentSection}>
        <span className={styles.video__contentSectionTitle}>Categories</span>
        <li>{podcast.categories[0].name}</li>
      </ul>
      <div className={styles.video__contentSection}>
        <span className={styles.video__contentSectionTitle}>Title</span>
        <p>{podcast.name}</p>
      </div>

      <div className={styles.video__contentSection}>
        <span className={styles.video__contentSectionTitle}>Description</span>
        <p>{podcast.description}</p>
      </div>
      <input type="checkbox" checked={check} onChange={check ? unLock : lock} />
      <div className={styles.video__setting}>
        <div className={styles.video__settingOptions}>
          <button onClick={editPodcast}>{ICONS.utils.edit}</button>
          <button onClick={deletePodcast}>{ICONS.utils.delete}</button>
        </div>
        {ICONS.utils.more}
      </div>
    </div>
  );
};

export default PodcastItem;
