import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import JobItem from "../job/JobItem";
import styles from "./JobView.module.css";
import GoogleMaps from "./GoogleMaps";
import DisplayRelatedJobs from "./DisplayRelatedJobs";

export default function JobView() {
  const { jobId } = useParams();
  const jobs = useSelector((state) => state.jobs);
  const jobFound = useRef({ found: false });
  const currentJob = useRef({});
  const currentJobFilter = jobs.filter((job) => job.id === jobId);
  currentJob.current = currentJobFilter;
  window.scrollTo(0, 0);
  const [showMarker, setShowMarker] = useState(false);

  // Function to set the marker manually. Now is no longer used.
  const showMarkerHandler = () => {
    setTimeout(() => setShowMarker(true), 1000);
  };

  // After loading the component first time, run a timeout of 2 seconds to locate the business location.
  // This was possible by managing some state in the parent JobView for google maps.
  useEffect(() => {
    showMarkerHandler();
  }, []);

  // Display the job selected by user, but larger with full details
  // Don't forget about the 'others' prop
  const displayJobSelected = () => {
    for (let i = 0; i < jobs.length; i++) {
      if (jobs[i].id === jobId) {
        jobFound.current.found = true;
        return (
          <>
            <div className={styles["jobview-container"]}>
              <JobItem
                key={jobId}
                junior={jobs[i].level.junior}
                middle={jobs[i].level.middle}
                senior={jobs[i].level.senior}
                id={jobs[i].id}
                title={jobs[i].title}
                description={jobs[i].description}
                employer={jobs[i].employer}
                topEmployer={jobs[i].topEmployer}
                salary={jobs[i].salary}
                location={jobs[i].location.city}
                posts={jobs[i].posts}
                long
                others
              />
              <h2 className={styles["other-jobs-message"]}>
                <i> Other Jobs from this Employer</i>
              </h2>
            </div>

            {/* Display related jobs means displaying jobs from the same employer, not role/position */}
            <DisplayRelatedJobs
              currentJob={currentJob}
              jobs={jobs}
              jobId={jobId}
            />
          </>
        );
      }
      // If the loop gets to the last index and doesn't found an element, return an error message
      if (i === jobs.length - 1) {
        jobFound.current.found = false;
        return (
          <h1>You applied to this job or the ID was changed due to refresh.</h1>
        );
      }
    }
  };

  return (
    <div className={styles.jobview}>
      <div
        className={styles["job-selected"]}
        onChange={() => setShowMarker(false)}
      >
        {displayJobSelected()}
      </div>
      <span className={styles["informations-container"]}>
        {jobFound.current.found && (
          <GoogleMaps
            lat={currentJob.current[0].location.maps.lat}
            lng={currentJob.current[0].location.maps.lng}
            showLocation={showMarker}
          ></GoogleMaps>
        )}
      </span>
    </div>
  );
}
