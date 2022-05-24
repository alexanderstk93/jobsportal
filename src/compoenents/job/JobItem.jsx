import React from "react";
import styles from "./JobItem.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeJob } from "../store/JobsSlice";
import { changeStatus, changeApplied } from "../store/StatusSlice";
import JobInformationCard from "./JobInformationCard";
import { addNotification } from "../store/NotificationsSlice";

/* -------------------------------------------------

This is the JobItem component, it will take the information
from the redux store through props and create the job items.
Than, the parents will display them as they want.
This component is flexible, for example, has some properties like senior, middle, senior and long.
If you put them as true, the item will load differently. 

------------------------------------------------- */

export default function JobItem({
  id,
  title,
  employer,
  description,
  topEmployer,
  junior,
  middle,
  senior,
  salary,
  location,
  posts,
  long,
}) {
  const topEmployerCard = <Link to={"/topemployer"}>Top Employer</Link>;
  const applied = useSelector((state) => state.status.applied);
  const dispatch = useDispatch();

  //Create Skill Element (p tag) if the conditions are met
  const loadSkillElement = (level) => {
    if (level === "junior" && junior) {
      return (
        <p className={styles.skill}>
          Junior 0-2 years experience
          {middle || senior ? "," : null}
        </p>
      );
    } else if (level === "middle" && middle) {
      return (
        <p className={styles.skill}>
          Middle 2-4 years experience
          {senior ? "," : null}
        </p>
      );
    } else if (level === "senior" && senior) {
      return <p className={styles.skill}>Senior 4-6 years experience</p>;
    }
  };

  return (
    <div
      className={styles.item}
      style={applied ? { opacity: "70%", pointerEvents: "none" } : null}
    >
      <div className={styles["title-and-informations-container"]}>
        <Link
          to={`/jobview/${id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <div className={styles["job-title"]}>{title}</div>
        </Link>
        {long ? (
          <JobInformationCard
            salary={salary}
            location={location}
            posts={posts}
          />
        ) : null}
      </div>
      <div className={styles.employer}>
        <i>{employer}</i>

        {/* Top Employer Card */}
        <div
          className={styles.topEmployer}
          style={!topEmployer ? { display: "none" } : null}
        >
          {topEmployer && topEmployerCard}
        </div>
      </div>

      {/* Skill Level */}
      <div
        className={
          long
            ? `${styles["skill-level"]} ${styles["long"]}`
            : styles["skill-level"]
        }
      >
        {loadSkillElement("junior")}
        {loadSkillElement("middle")}
        {loadSkillElement("senior")}
      </div>
      {/* Job Description */}
      <div
        className={
          long
            ? `${styles["job-description"]} ${styles["long"]}`
            : styles["job-description"]
        }
      >
        {long ? <h1>Full Description</h1> : null}
        {long ? description : description.slice(0, 250) + "..."}
      </div>
      {/* Apply Button */}
      <div className={styles.apply}>
        <button
          className={styles["apply-button"]}
          onClick={() => {
            dispatch(removeJob({ id: id }));
            dispatch(changeApplied({ title: title }));
            dispatch(
              addNotification({
                title: `Your application was sent!`,
                message: ` ${title}`,
              })
            );
            dispatch(changeStatus(true));
          }}
        >
          Apply
        </button>
      </div>
    </div>
  );
}
