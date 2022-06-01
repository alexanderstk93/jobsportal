import React from "react";
import { useDispatch } from "react-redux";
import styles from "./SaveChangesButton.module.css";
import { switchChangesSaved } from "../../store/StatusSlice";

export default function SaveChangesButton({ children, style, onClick }) {
  return (
    <button
      className={styles.button}
      style={style}
      onClick={(e) => {
        if (window.confirm("Confirm save?")) {
          onClick(e);
        }
      }}
    >
      Save
    </button>
  );
}
