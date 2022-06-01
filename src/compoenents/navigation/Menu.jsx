import React from "react";
import styles from "./Menu.module.css";
import Navigation from "./Navigation";
import JobFilter from "../job/JobFilter";

export default function Menu({ setInactiveMenu }) {
  return (
    <div className={styles.menu}>
      <Navigation />
      <JobFilter />
    </div>
  );
}
