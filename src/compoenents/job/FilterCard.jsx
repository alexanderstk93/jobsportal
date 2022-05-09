import React from "react";
import styles from "./FilterCard.module.css";

export default function FilterCard({ children, height, padding, flex }) {
  const customStyles = {
    height: height,
    padding: padding,
    display: flex ? "flex" : null,
  };
  return (
    <div className={styles.container} style={customStyles}>
      {children}
    </div>
  );
}
