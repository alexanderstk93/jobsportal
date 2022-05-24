import React from "react";
import styles from "./EditCardButton.module.css";

export default function EditCardButton({ onClick, style }) {
  return (
    <div
      className={styles.container}
      onClick={() => {
        onClick();
        window.scrollTo(0, 0);
      }}
      style={style}
    >
      <img src={require("../../assets/icons8-edit-64.png")} alt="" />
    </div>
  );
}
