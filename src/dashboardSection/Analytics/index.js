import React, { useState } from "react";
import ICONS from "../../assets/icons";
import { StatCard, TopUserItem } from "../../components";
import usePagination from "../../hooks/usePagination";
import styles from "./styles.module.scss";
import { Dots } from "react-activity";
import "react-activity/dist/Dots.css";
import { useEffect } from "react";
import { GetAnalytics } from "../../APIs/analytics";
import { fetchRequest } from "../../utils";
import { responseHandler } from "../../helpers";
import TopCountriesItem from "../../components/TopCountriesItem";

const Analytics = () => {
  const [inform, setInform] = useState([]);
  const [total, setTotal] = useState(0);
  const GetAnalytics = async () => {
    const response = await fetchRequest(`api/admin/getUserAnalytics`, "GET");

    const error = responseHandler(response, "with analytics");

    if (!error) {
      setInform(response.statistic.statistic);
      setTotal(response.statistic.totalCount);
    } else alert(error);
  };
  useEffect(() => {
    GetAnalytics();
  }, []);

  const cases = [
    {
      title: "All users",
      // info: inform.statistic.totalCount ? inform.statistic.totalCount : "wait",
    },
  ];

  const { data, isLoading } = usePagination("api/admin/getTopUsers");

  return (
    <div className={styles.analytics}>
      <div className={styles.analytics__cards}>
        <StatCard title="All users" info={total} />
      </div>
      <div className={styles.table}>
        <div className={styles.table__start}>
          <div className={styles.table__title}>Top users</div>
        </div>
        <div className={styles.table__inner}>
          <div className={styles.table__titleTable}>
            <div className={styles.table__titleTable_title}>Users</div>
          </div>
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
                      <TopUserItem user={user} />
                    </li>
                  );
                })}
              </>
            )}
          </ul>
        </div>
      </div>
      <div className={styles.table}>
        <div className={styles.table__start}>
          <div className={styles.table__title}>Top countries</div>
        </div>
        <div className={styles.table__inner}>
          <div className={styles.table__titleTable}>
            <div className={styles.table__titleTable_title}>Country</div>
            <div className={styles.table__titleTable_title}>Users</div>
          </div>
          <ul>
            {isLoading ? (
              <div className={styles.table__loader}>
                <Dots />
              </div>
            ) : (
              <>
                {inform.map((item, index) => {
                  return (
                    <li key={index}>
                      <TopCountriesItem item={item} />
                    </li>
                  );
                })}
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
