//-----------Basic imports----------------------------
import React from "react";
import styles from "./Home.module.scss";

//-----------Libraries----------------------------
import {
  NavLink,
  Route,
  useLocation,
  Switch,
  useHistory,
} from "react-router-dom";
import clsx from "clsx";

//-----------Dashboard pages---------------------------
import { Categories, Overview, Videos } from "../../dashboardSection";

//-----------Assets----------------------------
import ICONS from "../../assets/icons";

//-----------Routes----------------------------
import { removeToken } from "../../utils/localStorage";
import DashboardNavigation from "../../navigation/DashboardNavigation";
import useModal from "../../hooks/useModal";
import { Button, Modal } from "../../components";

const Home = () => {
  //-----------Hooks----------------------------
  const logOutModal = useModal();

  const history = useHistory();
  const location = useLocation();

  const [state, setState] = React.useState({
    showNavBar: false,
  });

  const { showNavBar } = state;

  //-----------Data----------------------------

  const tabs = [
    {
      name: "Analytics",
      path: "/analytics",
      icon: ICONS.navBar.overview,
    },
    {
      name: "User Management",
      path: "/users",
      icon: ICONS.navBar.categories,
    },
    // {
    //   name: "Users Reports",
    //   path: "/usersReports",
    //   icon: ICONS.navBar.categories,
    // },
    {
      name: "Podcasts",
      path: "/podcasts",
      icon: ICONS.navBar.videos,
    },
    {
      name: "Podcasts Reports",
      path: "/podcastsReports",
      icon: ICONS.navBar.videos,
    },
    {
      name: "Comments Reports",
      path: "/commentsReports",
      icon: ICONS.navBar.videos,
    },
    {
      name: "Admins",
      path: "/admins",
      icon: ICONS.navBar.categories,
    },
    {
      name: "Log out",
      icon: ICONS.navBar.logOut,
    },
  ];

  //-----------Layout----------------------------

  const menuClickHandler = () =>
    setState((prev) => ({ ...prev, showNavBar: !prev.showNavBar }));

  const tabClickHandler = () =>
    setState((prev) => ({ ...prev, showNavBar: false }));

  //-----------Layout----------------------------

  const logOut = async () => {
    await removeToken();
    history.push("/login");
  };

  return (
    <React.Fragment>
      <div className={styles.home}>
        <div className={styles.home__box}>
          <div
            className={clsx(
              styles.home__menu,
              showNavBar && styles.home__menu_active
            )}
          >
            <div className={styles.home__menuLogo}>
              <img src={ICONS.logo} alt="logo" />
              Dashboard
              <br />
              GeoPod
            </div>
            <ul>
              {tabs.map((tab, index) => (
                <li onClick={tabClickHandler} key={index}>
                  {tab?.path ? (
                    <NavLink to={tab.path} activeClassName={styles.active}>
                      {tab.icon}
                      {tab.name}
                    </NavLink>
                  ) : (
                    <span onClick={logOutModal.toggleModal}>
                      {tab.icon}
                      {tab.name}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.home__right}>
            <div className={styles.home__header}>
              <button
                onClick={menuClickHandler}
                className={clsx(
                  styles.home__menuIcon,
                  state.showNavBar && styles.home__menuIcon_active
                )}
              >
                <div></div>
                <div></div>
                <div></div>
              </button>
              {location.pathname.slice(1)}
            </div>

            <DashboardNavigation />
          </div>
        </div>
      </div>

      {logOutModal.isShow && (
        <Modal
          visible={logOutModal.isShow}
          closeBtn={true}
          onClosePopup={logOutModal.toggleModal}
        >
          <div>Are you sure you want to log out</div>
          <div className={styles.buttonCase}>
            <div className={styles.buttonRow}>
              <Button
                className={styles.modalButton}
                onClick={logOutModal.toggleModal}
              >
                Cancel
              </Button>
              <Button className={styles.modalButton} onClick={logOut}>
                Log out
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </React.Fragment>
  );
};

export default Home;
