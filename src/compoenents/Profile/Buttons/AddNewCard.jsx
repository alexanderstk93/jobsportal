import React from "react";
import styles from "./AddNewCard.module.css";
import { useState } from "react";

export default function AddNewCard({ onClick }) {
  const [adding, setAdding] = useState(false);

  return (
    <button
      style={adding ? { backgroundColor: "#d30e36" } : {}}
      onClick={() => {
        onClick();
        setAdding((state) => !state);
      }}
      className={styles.addButton}
    >
      <i>{adding ? "Close Form" : "Add New +"}</i>
    </button>
  );
}
