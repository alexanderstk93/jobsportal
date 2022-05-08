import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import JobItem from "../job/JobItem";
import styles from "./JobView.module.css";
import GoogleMaps from "./GoogleMaps";

export default function JobView() {
  const { jobId } = useParams();
  const jobs = useSelector((state) => state.jobs);
  const jobFound = useRef({ found: false });
  const currentJob = useRef({});

  const displayMoreFromThisEmployer = () => {
    const currentJobFilter = jobs.filter((job) => job.id === jobId);
    currentJob.current = currentJobFilter;
    console.log(currentJob);
    const relatedJobsFilter = jobs.filter((job) => {
      return job.employer === currentJobFilter[0].employer && job.id !== jobId;
    });
    const relatedJobsAsItems = relatedJobsFilter.map((job) => (
      <JobItem
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

    return relatedJobsAsItems.length > 0 ? (
      <div className={styles["other-jobs"]}>{relatedJobsAsItems}</div>
    ) : (
      <h1 className={styles["not-found"]}>No other jobs found.</h1>
    );
  };

  const displayJobSelected = () => {
    for (let i = 0; i < jobs.length; i++) {
      if (jobs[i].id === jobId) {
        jobFound.current.found = true;
        return (
          <>
            <div className={styles["jobview-container"]}>
              <JobItem
                junior={jobs[i].level.junior}
                middle={jobs[i].level.middle}
                senior={jobs[i].level.senior}
                id={jobs[i].id}
                title={jobs[i].title}
                description={jobs[i].description}
                employer={jobs[i].employer}
                topEmployer={jobs[i].topEmployer}
                long
                others
              />
              <h2 className={styles["other-jobs-message"]}>
                <i> Other Jobs from this Employer</i>
              </h2>
            </div>
            {displayMoreFromThisEmployer()}
          </>
        );
      }
      if (i === jobs.length - 1) {
        jobFound.current.found = false;
        return <h1>Something went wrong.</h1>;
      }
    }
  };
  console.log(jobFound);
  return (
    <div className={styles.jobview}>
      <div className={styles["job-selected"]}>{displayJobSelected()}</div>
      <span className={styles["informations-container"]}>
        {jobFound.current.found && (
          <GoogleMaps
            lat={currentJob.current[0].location.lat}
            lng={currentJob.current[0].location.lng}
          />
        )}
      </span>
    </div>
  );
}
