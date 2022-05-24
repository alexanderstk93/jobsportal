import React from "react";
import styles from "./ExperienceContainer.module.css";

export default function ExperienceContainer({
  jobName,
  companyName,
  city,
  jobDescription,
}) {
  return (
    <div className={styles.container}>
      <h2>{jobName}</h2>
      <div className={styles["company-and-city"]}>
        <p>
          <i>
            {companyName}, {city}
          </i>
        </p>
      </div>
      <div className={styles["job-description"]}>
        <p>{jobDescription}</p>
      </div>
    </div>
  );
}
