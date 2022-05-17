import React from "react";
import styles from "./Profile.module.css";
import Resume from "./Resume";

export default function Profile() {
  return (
    <div className={styles.container}>
      <Resume />
    </div>
  );
}
