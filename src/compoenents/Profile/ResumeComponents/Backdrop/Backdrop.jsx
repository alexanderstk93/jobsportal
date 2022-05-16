import React from "react";
import styles from "./Backdrop.module.css";

export default function Backdrop({ onClick }) {
  return <div onClick={onClick} className={styles.container}></div>;
}
