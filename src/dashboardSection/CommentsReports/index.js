import React, { useEffect, useState } from "react";
import ICONS from "../../assets/icons";
import { Modal, PodcastItem } from "../../components";
import useModal from "../../hooks/useModal";
import usePagination from "../../hooks/usePagination";
import styles from "./styles.module.scss";
import { Dots } from "react-activity";
import "react-activity/dist/Dots.css";
import { Formik } from "formik";
import { Input } from "../../components";
import { Button } from "../../components";
import Map from "../../components/Map";
import { ChangePodcast } from "../../APIs/changePodcast";
import CommentItem from "../../components/CommentItem";
import { DeleteCommentReport } from "../../APIs/deleteCommentReport";
const CommentsReports = () => {
  const [chooseComment, setChooseComment] = useState({});
  const [change, setChange] = useState(false);

  const deleteModal = useModal();
  const editModal = useModal();
  // ====================== handle submit =======================
  const handleSubmit = (id, formData) => {
    ChangePodcast(id, formData);
    setChange(true);
  };

  const { setData, data, page, isLoading, decrementPage, incrementPage } =
    usePagination("api/report/getReviewReports");

  const deleteReport = async () => {
    const iSsuccses = await DeleteCommentReport(chooseComment._id);
    if (iSsuccses) {
      const updatedData = {
        ...data,
        reports: data.reports.filter((item) => item._id !== chooseComment._id),
      };
      setData(updatedData);
      deleteModal.toggleModal();
    }
  };

  return (
    <React.Fragment>
      <div className={styles.table}>
        <div className={styles.table__start}>
          <div className={styles.table__title}>All Comments Reports</div>
        </div>
        <div className={styles.table__inner}>
          <div className={styles.table__titleTable}>
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
                      <CommentItem
                        report={report}
                        deletePod={deleteModal}
                        editPod={editModal}
                        setChooseComment={setChooseComment}
                      />
                    </li>
                  );
                })}
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
          <div>Delete Report {chooseComment.name}</div>
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

export default CommentsReports;
