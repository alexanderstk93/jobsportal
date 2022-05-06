import React from "react";
import styles from "./TopEmployerDescription.module.css";

export default function TopEmployerDescription() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Top Employer</h2>
      <p className={styles.description}>
        A top employer is a member of our service who have made more than 100
        hires in the last year. They respond fast and offer a variety of jobs.
        Usually, you will see a card near their company name which alerts this.
      </p>
    </div>
  );
}
