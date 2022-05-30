import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import JobFilter from "../job/JobFilter";
import JobList from "../job/JobList";
import PopularFilters from "../PopularFiltersSection/PopularFilters";
import { setIntroStatus } from "../store/StatusSlice";
import styles from "./Main.module.css";
import WelcomeSlider from "./WelcomeSlider";

export default function Main() {
  const dispatch = useDispatch();
  const introLoaded = useSelector((state) => state.status.introStatus);

  if (!introLoaded) {
    setTimeout(() => {
      dispatch(setIntroStatus(true));
    }, 5000);
  }

  return (
    <div className={styles.main}>
      {!introLoaded && <WelcomeSlider />}
      <div className={styles.left}>
        <JobFilter />
      </div>
      <div className={styles.mid}>
        <PopularFilters />
        <JobList />
      </div>
      <div className={styles.right}></div>
    </div>
  );
}
