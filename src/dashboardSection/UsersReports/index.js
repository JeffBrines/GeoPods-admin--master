import React, { useState } from "react";
import ICONS from "../../assets/icons";
import { Modal, PodcastItem } from "../../components";
import useModal from "../../hooks/useModal";
import usePagination from "../../hooks/usePagination";
import styles from "./styles.module.scss";
import { Dots } from "react-activity";
import "react-activity/dist/Dots.css";
import { Button } from "../../components";
import UserReportItem from "../../components/UserReportItem";
import { DeleteUserReport } from "../../APIs/deleteUserReport";
const UsersReports = () => {
  const [chooseUser, setChooseUser] = useState({});

  const deleteModal = useModal();
  const editModal = useModal();
  // ====================== handle submit =======================

  const deleteReport = () => {
    DeleteUserReport(chooseUser._id);
  };

  const { data, page, isLoading, decrementPage, incrementPage } = usePagination(
    "api/report/getUserReports"
  );
  console.log("data", data);
  return (
    <React.Fragment>
      <div className={styles.table}>
        <div className={styles.table__start}>
          <div className={styles.table__title}>All Users Reports</div>
        </div>
        <div className={styles.table__inner}>
          <div className={styles.table__titleTable}>
            <div className={styles.table__titleTable_title}>From</div>
            <div className={styles.table__titleTable_title}>Message</div>
            <div className={styles.table__titleTable_title}></div>
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
                      <UserReportItem
                        report={report}
                        deletePod={deleteModal}
                        editPod={editModal}
                        setChooseUser={setChooseUser}
                      />
                    </li>
                  );
                })}
              </>
            )}
          </ul>
        </div>
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
      </div>
      {deleteModal.isShow && (
        <Modal
          visible={deleteModal.isShow}
          closeBtn={true}
          onClosePopup={deleteModal.toggleModal}
        >
          <div>Delete Report {chooseUser.name}</div>
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

export default UsersReports;
