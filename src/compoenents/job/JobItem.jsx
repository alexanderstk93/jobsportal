import React, { useEffect } from "react";
import styles from "./JobItem.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeJob } from "../store/JobsSlice";
import Notification from "../MiniComponents/Notification";
import { changeStatus, changeApplied } from "../store/StatusSlice";

export default function JobItem({
  id,
  title,
  employer,
  description,
  topEmployer,
  long,
}) {
  const topEmployerCard = <Link to={"/topemployer"}>Top Employer</Link>;
  const applied = useSelector((state) => state.status.applied);
  const dispatch = useDispatch();
  console.log(applied);
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
        <div
          className={styles.topEmployer}
          style={!topEmployer ? { display: "none" } : null}
        >
          {topEmployer && topEmployerCard}
        </div>
      </div>
      <div className={styles["job-description"]}>
        {long ? description : description.slice(0, 250) + "..."}
      </div>
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
