import React from "react";
import styles from "./Menu.module.css";
import Navigation from "./Navigation";
import JobFilter from "../job/JobFilter";
import { useState } from "react";

export default function Menu({ setInactiveMenu }) {
  const [filterShow, setFilterShow] = useState(false);

  setTimeout(() => {
    setFilterShow(true);
  }, 100);

  return (
    <div className={styles.menu}>
      <button
        onClick={() => {
          setInactiveMenu();
          setFilterShow(false);
        }}
        className={styles.cancel}
      >
        X
      </button>

      {filterShow && <JobFilter />}
    </div>
  );
}
