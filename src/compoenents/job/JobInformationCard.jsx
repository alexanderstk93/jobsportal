import React from "react";
import styles from "./JobInformationCard.module.css";

export default function JobInformationCard({ salary, location, posts }) {
  return (
    <div className={styles.container}>
      <div className={styles.salary}>
        <p>
          <i>Salary: {salary} EUR </i>
        </p>
      </div>
      <div className={styles.location}>
        <p>
          <i>Location: {location}</i>
        </p>
      </div>
      <div className={styles.posts}>
        <p>
          <i>Posts: {posts}</i>
        </p>
      </div>
    </div>
  );
}
