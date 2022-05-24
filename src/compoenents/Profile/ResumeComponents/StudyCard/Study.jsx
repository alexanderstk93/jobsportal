import React from "react";
import styles from "./Study.module.css";

export default function Study({ university, start, end }) {
  return (
    <div className={styles.container}>
      <div className={styles.university}>{university}</div>
      <div className={styles.period}>
        {start} - {end}
      </div>
    </div>
  );
}
