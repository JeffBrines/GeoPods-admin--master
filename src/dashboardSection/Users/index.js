import React, { useState } from "react";
import ICONS from "../../assets/icons";
import { UserItem, Modal } from "../../components";
import useModal from "../../hooks/useModal";
import usePagination from "../../hooks/usePagination";
import styles from "./styles.module.scss";
import { Dots } from "react-activity";
import { Button } from "../../components";
import "react-activity/dist/Dots.css";
import { DeleteUser } from "../../APIs/deleteUser";
import { Formik } from "formik";
import { Input } from "../../components";
import VALIDATIONS from "../../validation";
import { fetchRequest } from "../../utils";
import { ChangeUser } from "../../APIs/changeUser";
const Users = () => {
  const [chooseUser, setChooseUser] = useState({});
  const [report, setReport] = useState(false);
  const [search, setSearch] = useState("");
  const deleteModal = useModal();
  const editModal = useModal();
  const changeModal = useModal();
  console.log("chosed", chooseUser);
  const {
    setData,
    data,
    page,
    isLoading,
    decrementPage,
    incrementPage,
    setQuery,
  } = usePagination("api/admin/getUsers");
  console.log("data", data);
  const handleDeleteUser = async () => {
    const iSsuccses = await DeleteUser(chooseUser._id);
    if (iSsuccses) {
      const updatedData = {
        ...data,
        users: data.users.filter((item) => item._id !== chooseUser._id),
      };
      setData(updatedData);
      deleteModal.toggleModal();
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setQuery(search);
    }
  };
  return (
    <React.Fragment>
      <div className={styles.table}>
        <div className={styles.table__start}>
          <div className={styles.table__title}>All users</div>
          <div style={{ display: "flex" }}>
            <input
              className={styles.table__input}
              value={search}
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
            <div className={styles.table__titleTable_title}>User</div>
            <div className={styles.table__titleTable_items}>
              <span>Ban</span>
            </div>
          </div>
          {!report ? (
            <ul>
              {isLoading ? (
                <div className={styles.table__loader}>
                  <Dots />
                </div>
              ) : (
                <>
                  {data?.users?.map((user, index) => {
                    return (
                      <li key={index}>
                        <UserItem
                          user={user}
                          deletePod={deleteModal}
                          editPod={editModal}
                          setChooseUser={setChooseUser}
                          changePod={changeModal}
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
          ) : (
            <ul>
              {isLoading ? (
                <div className={styles.table__loader}>
                  <Dots />
                </div>
              ) : (
                <>
                  {data?.users?.map((user, index) => {
                    return (
                      <li key={index}>
                        <UserItem
                          user={user}
                          deletePod={deleteModal}
                          editPod={editModal}
                          changePod={changeModal}
                          setChooseUser={setChooseUser}
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
          )}
        </div>
      </div>
      {deleteModal.isShow && (
        <Modal
          visible={deleteModal.isShow}
          closeBtn={true}
          onClosePopup={deleteModal.toggleModal}
        >
          <div>Delete User {chooseUser.name}</div>
          <div className={styles.buttonCase}>
            <div className={styles.buttonRow}>
              <Button
                className={styles.modalButton}
                onClick={deleteModal.toggleModal}
              >
                Cancel
              </Button>
              <Button className={styles.modalButton} onClick={handleDeleteUser}>
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
          <div>Send message for user {chooseUser.name}</div>
          <Formik
            validateOnBlur={false}
            validateOnChange={false}
            initialValues={{ message: "" }}
            onSubmit={async (values) => {
              const body = {
                userId: chooseUser,
                message: values.message,
              };

              const response = await fetchRequest(
                "api/admin/sendMail",
                "POST",
                body
              );
              editModal.toggleModal();
            }}
          >
            {({ errors, values, setFieldValue, handleSubmit }) => (
              <form
                onSubmit={handleSubmit}
                className={styles.signIn__inner}
                style={{ marginTop: 20 }}
              >
                <div className={styles.signIn__form}>
                  <Input
                    formHelper
                    placeholder="Message"
                    name="message"
                    value={values.message}
                    error={errors.message}
                    onChange={setFieldValue}
                  />
                  <Button type="submit" style={{ marginTop: 20 }}>
                    <span>Send</span>
                  </Button>
                </div>
              </form>
            )}
          </Formik>
        </Modal>
      )}
      {changeModal.isShow && (
        <Modal
          visible={changeModal.isShow}
          closeBtn={true}
          onClosePopup={changeModal.toggleModal}
        >
          <div className={styles.detailsTitle}>Edit User</div>
          <div className={styles.detailsRow}>
            <Formik
              validateOnBlur={false}
              validateOnChange={false}
              initialValues={{
                name: chooseUser.name,
                email: chooseUser.email,
                country: chooseUser.country,
                city: chooseUser.city,
                userName: chooseUser.userName,
                webUrl: chooseUser.webUrl,
              }}
              onSubmit={async (values) => {
                await ChangeUser(chooseUser._id, values);
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
                  <div className={styles.changeForm}>
                    <div className={styles.inputTitle}> Name </div>
                    <Input
                      formHelper
                      placeholder="name"
                      name="name"
                      value={values.name}
                      error={errors.name}
                      onChange={setFieldValue}
                    />
                    <div className={styles.inputTitle}> User Name </div>
                    <Input
                      formHelper
                      placeholder="User Name"
                      name="userName"
                      value={values.userName}
                      error={errors.userName}
                      onChange={setFieldValue}
                    />
                    <div className={styles.inputTitle}> Email </div>
                    <Input
                      formHelper
                      placeholder="email"
                      name="email"
                      value={values.email}
                      error={errors.email}
                      onChange={setFieldValue}
                    />
                    <div className={styles.inputTitle}> Country </div>
                    <Input
                      formHelper
                      placeholder="country"
                      name="country"
                      value={values.country}
                      error={errors.country}
                      onChange={setFieldValue}
                    />
                    <div className={styles.inputTitle}> City </div>
                    <Input
                      formHelper
                      placeholder="city"
                      name="city"
                      value={values.city}
                      error={errors.city}
                      onChange={setFieldValue}
                    />
                    <div className={styles.inputTitle}> webUrl </div>
                    <Input
                      formHelper
                      placeholder="webUrl"
                      name="webUrl"
                      value={values.webUrl}
                      error={errors.webUrl}
                      onChange={setFieldValue}
                    />
                    <Button type="submit">
                      <span>Change</span>
                    </Button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </Modal>
      )}
    </React.Fragment>
  );
};

export default Users;
