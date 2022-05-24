import React from "react";
import styles from "./SaveChangesButton.module.css";

export default function SaveChangesButton({ children, style, onCLick }) {
  return (
    <button className={styles.button} style={style} onClick={onCLick}>
      {children}
    </button>
  );
}
