import React from "react";
import JobFilter from "../job/JobFilter";
import JobList from "../job/JobList";
import styles from "./Main.module.css";

export default function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <JobFilter />
      </div>
      <div className={styles.mid}>
        <JobList />
      </div>
      <div className={styles.right}></div>
    </div>
  );
}
