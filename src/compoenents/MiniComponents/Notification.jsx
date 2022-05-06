import React from "react";
import styles from "./Notification.module.css";
import { useDispatch, useSelector } from "react-redux";

export default function Notification() {
  const applied = useSelector((state) => state.status.applied);
  const appliedTo = useSelector((state) => state.status.appliedTo);

  return (
    <>
      {" "}
      <div
        className={styles.container}
        style={applied ? { visibility: "visible" } : { visibility: "hidden" }}
      >
        <img src={require("../assets/check.png")} alt="check" />
        <div className={styles.info}>
          <p>Ati aplicat cu succes.</p>
          <h2>{appliedTo}</h2>
        </div>
      </div>
    </>
  );
}
