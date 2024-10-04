import React, { useState } from "react";
import ICONS from "../../assets/icons";
import { Modal, PodcastItem } from "../../components";
import useModal from "../../hooks/useModal";
import usePagination from "../../hooks/usePagination";
import styles from "./styles.module.scss";
import { Dots } from "react-activity";
import "react-activity/dist/Dots.css";
import { Button } from "../../components";
import PodcastReportItem from "../../components/PodcastReportItem";
import { DeletePodcastReport } from "../../APIs/deletePodcastReport";
const PodcastsReports = () => {
  const [choosePodcast, setChoosePodcast] = useState({});

  const deleteModal = useModal();

  // ====================== handle submit =======================

  const { setData, data, page, isLoading, decrementPage, incrementPage } =
    usePagination("api/report/getPodcastReports");

  const deleteReport = async () => {
    const iSsuccses = await DeletePodcastReport(choosePodcast._id);
    if (iSsuccses) {
      const updatedData = {
        ...data,
        reports: data.reports.filter((item) => item._id !== choosePodcast._id),
      };
      setData(updatedData);
      deleteModal.toggleModal();
    }
  };

  return (
    <React.Fragment>
      <div className={styles.table}>
        <div className={styles.table__start}>
          <div className={styles.table__title}>All Podcasts Reports</div>
        </div>
        <div className={styles.table__inner}>
          <div className={styles.table__titleTable}>
            <div className={styles.table__titleTable_title}>Podcast</div>
            <div className={styles.table__titleTable_title}>From</div>
            <div className={styles.table__titleTable_title}>Message</div>
            <div className={styles.table__titleTable_title}>To</div>
            <div className={styles.table__titleTable_title}>More</div>
          </div>
          <ul>
            {isLoading ? (
              <div className={styles.table__loader}>
                <Dots />
              </div>
            ) : (
              <>
                {data?.reports?.map((report, index) => {
                  return (
                    <li key={index}>
                      <PodcastReportItem
                        report={report}
                        deletePod={deleteModal}
                        setChoosePodcast={setChoosePodcast}
                      />
                    </li>
                  );
                })}
                {data?.reports?.length < 0 && (
                  <div className={styles.table__pagination}>
                    <p>Page: {page}</p>
                    <div className={styles.table__arrows}>
                      <button
                        className={styles.table__arrow}
                        onClick={() => decrementPage(page)}
                      >
                        {ICONS.utils.smallArrow}
                      </button>
                      <button
                        className={styles.table__arrow}
                        onClick={() => incrementPage(page)}
                      >
                        {ICONS.utils.smallArrow}
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}
          </ul>
        </div>
      </div>
      {deleteModal.isShow && (
        <Modal
          visible={deleteModal.isShow}
          closeBtn={true}
          onClosePopup={deleteModal.toggleModal}
        >
          <div>Delete Report {choosePodcast.name}</div>
          <div className={styles.buttonCase}>
            <div className={styles.buttonRow}>
              <Button
                className={styles.modalButton}
                onClick={deleteModal.toggleModal}
              >
                Cancel
              </Button>
              <Button className={styles.modalButton} onClick={deleteReport}>
                Delete
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </React.Fragment>
  );
};

export default PodcastsReports;
