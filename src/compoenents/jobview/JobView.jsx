import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import JobItem from "../job/JobItem";
import styles from "./JobView.module.css";

export default function JobView() {
  const { jobId } = useParams();
  const jobs = useSelector((state) => state.jobs);

  const displayJobSelected = () => {
    for (let job of jobs) {
      if (job.id === jobId) {
        return (
          <JobItem
            id={job.id}
            title={job.title}
            description={job.description}
            employer={job.employer}
            long
          />
        );
      }
    }
  };

  return <div className={styles.jobview}>{displayJobSelected()}</div>;
}
