import React, { useState } from "react";
import { AdminCard, Button, Modal } from "../../components";

import useModal from "../../hooks/useModal";
import usePagination from "../../hooks/usePagination";

import ICONS from "../../assets/icons";

import { Dots } from "react-activity";
import "react-activity/dist/Dots.css";

import styles from "./styles.module.scss";
import { deleteAdmin } from "../../APIs/deleteAdmin";
import { Formik } from "formik";
import VALIDATIONS from "../../validation";
import { fetchRequest } from "../../utils";
import { Input } from "../../components";
const Admins = () => {
  const [chooseAdmin, setChooseAdmin] = useState({});

  const adminModal = useModal();
  const deleteModal = useModal();

  const { setData, data, page, isLoading, decrementPage, incrementPage } =
    usePagination("api/admin/getAdmins");
  const deleteAdmins = async () => {
    const iSsuccses = await deleteAdmin(chooseAdmin._id);
    if (iSsuccses) {
      const updatedData = {
        ...data,
        admins: data.admins.filter((item) => item._id !== chooseAdmin._id),
      };
      setData(updatedData);
      deleteModal.toggleModal();
    }
  };

  return (
    <React.Fragment>
      <div className={styles.table}>
        <div className={styles.table__start}>
          <div className={styles.table__title}>All admins</div>
          <button onClick={adminModal.toggleModal}>{ICONS.utils.close}</button>
        </div>
        <div className={styles.table__inner}>
          <div className={styles.table__titleTable}>
            <div className={styles.table__titleTable_title}>Admin</div>
          </div>
          <ul>
            {isLoading ? (
              <div className={styles.table__loader}>
                <Dots />
              </div>
            ) : (
              <>
                {data?.admins?.map((admin, index) => {
                  return (
                    <li key={index}>
                      <AdminCard
                        config={deleteModal}
                        admin={admin}
                        setChooseAdmin={setChooseAdmin}
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

      {adminModal.isShow && (
        <Modal
          visible={adminModal.isShow}
          closeBtn={true}
          onClosePopup={adminModal.toggleModal}
        >
          <div className={styles.signIn}>
            <Formik
              validateOnBlur={false}
              validateOnChange={false}
              initialValues={{ login: "", password: "" }}
              validationSchema={VALIDATIONS.loginSchema}
              onSubmit={async (values) => {
                const body = {
                  login: values.login,
                  password: values.password,
                };

                const response = await fetchRequest(
                  "api/admin/createAdmin",
                  "POST",
                  body
                );

                if (response) {
                  adminModal.toggleModal();
                }
              }}
            >
              {({ errors, values, setFieldValue, handleSubmit }) => (
                <form onSubmit={handleSubmit} className={styles.signIn__inner}>
                  <div className={styles.signIn__title}>Add New Admin</div>

                  <div className={styles.signIn__form}>
                    <Input
                      formHelper
                      placeholder="Login"
                      name="login"
                      value={values.login}
                      error={errors.login}
                      onChange={setFieldValue}
                    />
                    <Input
                      formHelper
                      placeholder="Password"
                      name="password"
                      password
                      value={values.password}
                      error={errors.password}
                      onChange={setFieldValue}
                    />
                    <Button type="submit">
                      <span>Add new</span>
                    </Button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </Modal>
      )}

      {deleteModal.isShow && (
        <Modal
          visible={deleteModal.isShow}
          closeBtn={true}
          onClosePopup={deleteModal.toggleModal}
        >
          <div>Delete Admin {chooseAdmin.name}</div>
          <div className={styles.buttonCase}>
            <div className={styles.buttonRow}>
              <Button
                className={styles.modalButton}
                onClick={deleteModal.toggleModal}
              >
                Cancel
              </Button>
              <Button className={styles.modalButton} onClick={deleteAdmins}>
                Delete
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </React.Fragment>
  );
};

export default Admins;
