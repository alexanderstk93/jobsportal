import React from "react";
import ApplicationsStatus from "./ApplicationsStatus";
import styles from "./Profile.module.css";
import Resume from "./Resume";

export default function Profile() {
  return (
    <div className={styles.container}>
      <div className={styles["left-side"]}>
        <Resume />
      </div>
      <div className={styles["right-side"]}>
        <ApplicationsStatus />
      </div>
    </div>
  );
}
