import React from "react";
import UniversalCard from "../UniversalCard/UniversalCard";
import styles from "./ResumeLanguageBar.module.css";
export default function ResumeLanguageBar() {
  return (
    <UniversalCard>
      <div className={styles.languages}>
        <div className={styles["languages-container"]}>
          <img
            src={require("../../../assets/romania-flag-icon-64.png")}
            alt=""
          />
          <p>Romanian</p>
        </div>
        <div className={styles["languages-container"]}>
          <img
            src={require("../../../assets/united-states-of-america-flag-medium.png")}
            alt=""
          />
          <p>English</p>
        </div>
      </div>
    </UniversalCard>
  );
}
