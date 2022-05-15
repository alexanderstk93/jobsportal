import React from "react";
import styles from "./UniversalCard.module.css";

export default function UniversalCard({ children }) {
  return <div className={styles.container}>{children}</div>;
}
