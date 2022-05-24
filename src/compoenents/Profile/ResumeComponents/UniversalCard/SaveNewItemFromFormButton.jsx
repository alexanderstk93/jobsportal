import React from "react";
import styles from "./SaveNewItemFromFormButton.module.css";

export default function SaveNewItemFromFormButton({ onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
      Add
    </button>
  );
}
