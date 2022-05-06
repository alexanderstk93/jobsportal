import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import JobItem from "./JobItem";

export default function JobList() {
  const searchContent = useSelector((state) => state.status.search);
  const jobsList = useSelector((state) => state.jobs);
  const keyWords = [];

  // We receive one string by 'searchContent', with this function we want to slice them to separate words
  const createMultipleKeyWords = () => {
    let currentKeyWord = "";
    for (let i = 0; i < searchContent.length; i++) {
      if (searchContent[i] !== " ") {
        currentKeyWord += searchContent[i];
      } else if (searchContent[i] === " ") {
        keyWords.push(currentKeyWord);
        currentKeyWord = "";
      }
      if (searchContent[i + 1] === undefined) {
        keyWords.push(currentKeyWord);
      }
    }
  };

  createMultipleKeyWords();

  // After slicing, we'll check if there is some search content, if it does, we'll load the filtered jobs. If not, all of them.
  const loadJobItems = () => {
    let jobsToDisplay = [];
    if (searchContent) {
      jobsToDisplay = jobsList.filter((job) => {
        let jobMatched = false;
        for (let keyWord of keyWords) {
          console.log(keyWord);
          if (
            job.title.toLowerCase().includes(keyWord) ||
            job.description.toLowerCase().includes(keyWord)
          ) {
            jobMatched = true;
          }
        }
        return jobMatched;
      });
      console.log(jobsToDisplay);
    } else {
      jobsToDisplay = jobsList;
    }
    jobsToDisplay = jobsToDisplay.map((job) => (
      <JobItem
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
