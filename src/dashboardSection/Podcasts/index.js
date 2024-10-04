import React, { useState } from "react";
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
import { DeletePodcast } from "../../APIs/deletePodcast";
const Podcasts = () => {
  const [choosePodcast, setChoosePodcast] = useState({});
  const [search, setSearch] = useState("");
  const deleteModal = useModal();
  const editModal = useModal();
  // ====================== handle submit =======================
  const handleSubmit = (id) => {
    ChangePodcast(id);
  };

  const deletePodcasts = async () => {
    const iSsuccses = await DeletePodcast(choosePodcast._id);
    if (iSsuccses) {
      const updatedData = {
        ...data,
        podcasts: data.podcasts.filter(
          (item) => item._id !== choosePodcast._id
        ),
      };
      setData(updatedData);
      deleteModal.toggleModal();
    }
  };

  const {
    setData,
    data,
    page,
    isLoading,
    decrementPage,
    incrementPage,
    setQuery,
  } = usePagination("api/admin/getPodcasts");
  console.log("podcasts", data);
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setQuery(search);
    }
  };
  return (
    <React.Fragment>
      <div className={styles.table}>
        <div className={styles.table__start}>
          <div className={styles.table__title}>All podcasts</div>
          <div style={{ display: "flex" }}>
            <input
              className={styles.table__input}
              onKeyDown={handleKeyDown}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={() => setQuery(search)}>
              {ICONS.utils.search}
            </button>
          </div>
        </div>
        <div className={styles.table__inner}>
          <div className={styles.table__titleTable}>
            <div className={styles.table__titleTable_title}>Podcast</div>
          </div>
          <ul>
            {isLoading ? (
              <div className={styles.table__loader}>
                <Dots />
              </div>
            ) : (
              <>
                {data?.podcasts?.map((podcast, index) => {
                  return (
                    <li key={index}>
                      <PodcastItem
                        podcast={podcast}
                        deletePod={deleteModal}
                        editPod={editModal}
                        setChoosePodcast={setChoosePodcast}
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
          <div>Delete Podcast {choosePodcast.name}</div>
          <div className={styles.buttonCase}>
            <div className={styles.buttonRow}>
              <Button
                className={styles.modalButton}
                onClick={deleteModal.toggleModal}
              >
                Cancel
              </Button>
              <Button className={styles.modalButton} onClick={deletePodcasts}>
                Delete
              </Button>
            </div>
          </div>
        </Modal>
      )}
      {editModal.isShow && (
        <Modal
          visible={editModal.isShow}
          closeBtn={true}
          onClosePopup={editModal.toggleModal}
        >
          {console.log("data", choosePodcast)}
          <div className={styles.detailsTitle}>
            Edit Podcast {choosePodcast.name}
          </div>
          <div className={styles.detailsRow}>
            <Formik
              validateOnBlur={false}
              validateOnChange={false}
              initialValues={{
                name: choosePodcast.name,
                author: choosePodcast.author,
                url: choosePodcast.url,
                description: choosePodcast.description,
                priority: choosePodcast.priority,
              }}
              onSubmit={async (values) => {
                await ChangePodcast(choosePodcast._id, values);
                editModal.toggleModal();
                window.location.reload();
              }}
            >
              {({ errors, values, setFieldValue, handleSubmit }) => (
                <form
                  onSubmit={handleSubmit}
                  className={styles.signIn__inner}
                  className={styles.modalFormik}
                >
                  <div className={styles.signIn__form}>
                    <div className={styles.inputTitle}> Name </div>
                    <Input
                      formHelper
                      placeholder="name"
                      name="name"
                      value={values.name}
                      error={errors.name}
                      onChange={setFieldValue}
                    />

                    <div className={styles.inputTitle}> author </div>
                    <Input
                      formHelper
                      placeholder="author"
                      name="author"
                      value={values.author}
                      error={errors.author}
                      onChange={setFieldValue}
                    />
                    <div className={styles.inputTitle}> url </div>
                    <Input
                      formHelper
                      placeholder="url"
                      name="url"
                      value={values.url}
                      error={errors.url}
                      onChange={setFieldValue}
                    />
                    <div className={styles.inputTitle}> description </div>
                    <Input
                      formHelper
                      placeholder="description"
                      name="description"
                      value={values.description}
                      error={errors.description}
                      onChange={setFieldValue}
                    />
                    <div className={styles.inputTitle}> priority </div>
                    <Input
                      formHelper
                      placeholder="priority"
                      name="priority"
                      value={values.priority}
                      error={errors.priority}
                      onChange={setFieldValue}
                    />

                    <Button type="submit">
                      <span>Change</span>
                    </Button>
                  </div>
                </form>
              )}
            </Formik>
            <Map position={choosePodcast.location} />
          </div>
        </Modal>
      )}
    </React.Fragment>
  );
};

export default Podcasts;
