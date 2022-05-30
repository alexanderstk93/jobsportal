import React from "react";
import styles from "./RemoveItemButton.module.css";

export default function RemoveItemButton({ children, style, onClick }) {
  return (
    <button className={styles.button} style={style} onClick={onClick}>
      Delete
    </button>
  );
}
