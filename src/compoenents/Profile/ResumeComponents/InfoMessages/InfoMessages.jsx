import React from "react";
import styles from "./InfoMessage.module.css";

export default function InfoMessages({ message1, message2 }) {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <p className={styles.title}>
          <i>What to complete here?</i>
        </p>
        <p className={styles.message}>{message1}</p>
      </div>
      <div className={styles.info}>
        <p className={styles.title}>
          <i>Experts Advice</i>
        </p>
        <p className={styles.message}>{message2}</p>
      </div>
    </div>
  );
}
