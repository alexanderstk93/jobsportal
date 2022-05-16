import React from "react";
import styles from "./InfoMessage.module.css";

export default function InfoMessages({ title1, message1, title2, message2 }) {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <p className={styles.title}>
          <i>{title1}</i>
        </p>
        <p className={styles.message}>{message1}</p>
      </div>
      <div className={styles.info}>
        <p className={styles.title}>
          <i>{title2}</i>
        </p>
        <p className={styles.message}>{message2}</p>
      </div>
    </div>
  );
}
