import React from "react";
import JobList from "../job/JobList";
import styles from "./Main.module.css";

export default function Main() {
  return (
    <div className={styles.main}>
      <JobList />
    </div>
  );
}
