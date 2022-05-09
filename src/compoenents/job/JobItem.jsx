import React from "react";
import styles from "./JobItem.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeJob } from "../store/JobsSlice";
import { changeStatus, changeApplied } from "../store/StatusSlice";

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
  long,
}) {
  const topEmployerCard = <Link to={"/topemployer"}>Top Employer</Link>;
  const applied = useSelector((state) => state.status.applied);
  const dispatch = useDispatch();

  return (
    <div
      className={styles.item}
      style={applied ? { opacity: "70%", pointerEvents: "none" } : null}
    >
      <Link
        to={`/jobview/${id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className={styles["job-title"]}>{title}</div>
      </Link>
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
      <div className={styles["skill-level"]}>
        <p
          className={styles.skill}
          style={junior ? { display: "block" } : { display: "none" }}
        >
          Junior 0-2 years experience
          {middle || senior ? "," : null}
        </p>
        <p
          className={styles.skill}
          style={middle ? { display: "block" } : { display: "none" }}
        >
          Middle 2-4 years experience
          {senior ? "," : null}
        </p>
        <p
          className={styles.skill}
          style={senior ? { display: "block" } : { display: "none" }}
        >
          Senior 4-6 years experience
        </p>
      </div>

      {/* Job Description */}
      <div
        className={
          long
            ? `${styles["job-description"]} ${styles["long"]}`
            : styles["job-description"]
        }
      >
        {long ? description : description.slice(0, 250) + "..."}
      </div>
      {/* Apply Button */}
      <div className={styles.apply}>
        <button
          className={styles["apply-button"]}
          onClick={() => {
            dispatch(removeJob({ id: id }));
            dispatch(changeApplied({ title: title }));
            dispatch(changeStatus());

            setTimeout(() => {
              dispatch(changeStatus());
            }, 3000);
          }}
        >
          Apply
        </button>
      </div>
    </div>
  );
}
