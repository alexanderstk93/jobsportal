import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import JobItem from "./JobItem";

/* -------------------------------------------------

This component will manage to render the list
of job items <JobItem/> if the searchContent state is true
it will filter the results and render the ones that match the searched words.
An algorithm will separate the string in single words and will try to find this words
in the title or description of the job. 

------------------------------------------------- */

export default function JobList() {
  // const searchContent = useSelector((state) => state.status.search);
  const jobsList = useSelector((state) => state.jobs);
  const keyWords = useSelector((state) => state.status.search);
  console.log(keyWords);

  // After slicing, we'll check if there is some search content, if it does, we'll load the filtered jobs. If not, all of them.
  const loadJobItems = () => {
    let jobsToDisplay = [];
    if (keyWords.length > 0) {
      jobsToDisplay = jobsList.filter((job) => {
        let jobMatched = false;
        for (let keyWord of keyWords) {
          if (
            job.title.toLowerCase().includes(keyWord) ||
            job.description.toLowerCase().includes(keyWord)
          ) {
            jobMatched = true;
          }
        }
        return jobMatched;
      });
    } else {
      jobsToDisplay = jobsList;
    }
    jobsToDisplay = jobsToDisplay.map((job) => (
      <JobItem
        junior={job.level.junior}
        middle={job.level.middle}
        senior={job.level.senior}
        key={job.id}
        id={job.id}
        title={job.title}
        description={job.description}
        employer={job.employer}
        topEmployer={job.topEmployer}
      />
    ));

    return jobsToDisplay;
  };

  return <ul>{loadJobItems()}</ul>;
}
