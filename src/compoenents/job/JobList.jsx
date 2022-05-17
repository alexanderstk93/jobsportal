import React from "react";
import { useSelector } from "react-redux";
import styles from "./JobList.module.css";
import JobItem from "./JobItem";
import { cities } from "./ListOfCities";
import { skills } from "./ListOfSkills";

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
  let jobsToDisplay = [];
  // After slicing, we'll check if there is some search content, if it does, we'll load the filtered jobs. If not, all of them.
  const loadJobItems = () => {
    if (keyWords.length > 0) {
      // Filter cities from keyWords, so we get the best results for users.
      const citiesFilters = cities.filter((city) =>
        keyWords.includes(city.toLowerCase())
      );

      // Filter skills from keyWords, so we get the best results for users.
      const skillsFilters = keyWords.filter((skill) => skills.includes(skill));

      // Filter search words from keyWords, so we get the best results for users.
      const searchFilters = keyWords.filter((searchKeyWord) =>
        !citiesFilters.includes(searchKeyWord) &&
        !skillsFilters.includes(searchKeyWord)
          ? true
          : false
      );
      console.log(citiesFilters);
      // FILTER JOB FOR SEARCH FILTERS
      const filterJobToMatchSearchFilters = (job) => {
        for (let searchFilter of searchFilters) {
          return job.title.toLowerCase().includes(searchFilter) ||
            job.description.toLowerCase().includes(searchFilter)
            ? true
            : false;
        }
      };

      // FILTER JOB FOR CITY FILTERS
      const filterJobToMatchCityFilters = (job) => {
        for (let city of citiesFilters) {
          if (job.location.city.toLowerCase() === city) return true;
        }
      };

      // FILTER JOB FOR SKILL FILTERS
      const filterJobToMatchSkillFilter = (job) => {
        for (let skill of skillsFilters) {
          return skill === "0-2 years experience" && job.level.junior
            ? true
            : skill === "2-4 years experience" && job.level.middle
            ? true
            : skill === "4-6 years experience" && job.level.senior
            ? true
            : false;
        }
      };

      // CHECK EVERY SCENARIO POSSIBLE BASED ON CURRENT FILTER OPTIONS
      jobsToDisplay = jobsList.filter((job) => {
        if (
          searchFilters.length > 0 &&
          citiesFilters.length === 0 &&
          skillsFilters.length === 0
        ) {
          return filterJobToMatchSearchFilters(job);
        } else if (
          searchFilters.length === 0 &&
          citiesFilters.length > 0 &&
          skillsFilters.length === 0
        ) {
          return filterJobToMatchCityFilters(job);
        } else if (
          searchFilters.length === 0 &&
          citiesFilters.length === 0 &&
          skillsFilters.length > 0
        ) {
          return filterJobToMatchSkillFilter(job);
        } else if (
          searchFilters.length > 0 &&
          citiesFilters.length > 0 &&
          skillsFilters.length > 0
        ) {
          return (
            filterJobToMatchSearchFilters(job) &&
            filterJobToMatchCityFilters(job) &&
            filterJobToMatchSkillFilter(job)
          );
        } else if (
          searchFilters.length > 0 &&
          citiesFilters.length > 0 &&
          skillsFilters.length === 0
        ) {
          return (
            filterJobToMatchSearchFilters(job) &&
            filterJobToMatchCityFilters(job)
          );
        } else if (
          searchFilters.length > 0 &&
          citiesFilters.length === 0 &&
          skillsFilters.length > 0
        ) {
          return (
            filterJobToMatchSearchFilters(job) &&
            filterJobToMatchSkillFilter(job)
          );
        } else if (
          searchFilters.length === 0 &&
          citiesFilters.length > 0 &&
          skillsFilters.length > 0
        ) {
          return (
            filterJobToMatchCityFilters(job) && filterJobToMatchSkillFilter(job)
          );
        }
      });
    } else {
      jobsToDisplay = jobsList;
    }
    // MAP THE JOBS PASSED TO JOBITEMS
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
    // RETURN THE JOBITEMS FINAL LIST
  };
  loadJobItems();
  return (
    <ul>
      <h3 className={styles.jobsFound}>
        Jobs found:
        {` ${jobsToDisplay.length}`}
      </h3>
      {jobsToDisplay}
    </ul>
  );
}
