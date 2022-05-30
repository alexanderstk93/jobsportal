import React from "react";
import styles from "./Study.module.css";

export default function Study({ university, start, end, description }) {
  return (
    <div className={styles.container}>
      <div className={styles.university}>{university}</div>
      <div className={styles.period}>
        <i>
          {start} - {end}
        </i>
      </div>
      <div className={styles.description}>{description}</div>
    </div>
  );
}
