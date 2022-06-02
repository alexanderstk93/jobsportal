import React from "react";
import styles from "./FilterCard.module.css";
import { useSelector } from "react-redux";

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

  const width = useSelector((state) => state.status.width);

  return (
    <div
      className={width <= 1020 ? styles.mobile : styles.container}
      style={customStyles}
    >
      {children}
    </div>
  );
}
