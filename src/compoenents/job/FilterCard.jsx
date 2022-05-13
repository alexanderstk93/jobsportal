import React from "react";
import styles from "./FilterCard.module.css";

export default function FilterCard({
  children,
  height,
  padding,
  flex,
  minHeight,
}) {
  const customStyles = {
    height: height,
    padding: padding,
    display: flex ? "flex" : null,
    minHeight: minHeight,
  };
  return (
    <div className={styles.container} style={customStyles}>
      {children}
    </div>
  );
}
