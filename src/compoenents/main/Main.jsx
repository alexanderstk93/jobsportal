import React from "react";
import JobFilter from "../job/JobFilter";
import JobList from "../job/JobList";
import PopularFilters from "../PopularFiltersSection/PopularFilters";
import styles from "./Main.module.css";

export default function Main() {
  return (
    <div className={styles.main}>
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
