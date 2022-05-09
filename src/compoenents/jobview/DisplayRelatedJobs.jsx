import React from "react";
import styles from "./DisplayRelatedJobs.module.css";
import JobItem from "../job/JobItem";

export default function DisplayRelatedJobs({ currentJob, jobs, jobId }) {
  const relatedJobsFilter = jobs.filter((job) => {
    return job.employer === currentJob.current[0].employer && job.id !== jobId;
  });
  const relatedJobsAsItems = relatedJobsFilter.map((job) => (
    <JobItem
      key={jobId}
      junior={job.level.junior}
      middle={job.level.middle}
      senior={job.level.senior}
      id={job.id}
      title={job.title}
      description={job.description}
      employer={job.employer}
      topEmployer={job.topEmployer}
    />
  ));
  console.log(relatedJobsAsItems);
  return relatedJobsAsItems.length > 0 ? (
    <div className={styles["other-jobs"]}>{relatedJobsAsItems}</div>
  ) : (
    <h1 className={styles["not-found"]}>No other jobs found.</h1>
  );
}
