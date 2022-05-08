import React from "react";
import styles from "./AddJobItemForm.module.css";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addJob } from "../store/JobsSlice";
import { v4 as uuidv4 } from "uuid";

export default function AddJobItemForm() {
  const jobTitle = useRef("");
  const company = useRef("");
  const description = useRef("");
  const dispatch = useDispatch();
  const [juniorChecked, setJunior] = useState(false);
  const [middleChecked, setMiddle] = useState(false);
  const [seniorChecked, setSenior] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(
      addJob({
        id: uuidv4(),
        employer: company.current.value,
        title: jobTitle.current.value,
        description: description.current.value,
        level: {
          junior: juniorChecked,
          middle: middleChecked,
          senior: seniorChecked,
        },
      })
    );
  };

  return (
    <form action="" className={styles["form-container"]}>
      <div className={styles["input-container"]}>
        <label htmlFor="jobTitle">Job Title</label>
        <input
          ref={jobTitle}
          type="text"
          name="jobTitle"
          id="jobTitle"
          required
        />
      </div>
      <div className={styles["input-container"]}>
        <label htmlFor="company">Company Name</label>
        <input ref={company} type="text" name="company" id="company" required />
      </div>
      <div className={styles["checkbox-container"]}>
        <label htmlFor="junior">Junior</label>
        <input
          type="checkbox"
          value={"junior"}
          id="junior"
          onChange={(e) => {
            e.preventDefault();
            setJunior(!juniorChecked);
          }}
        />
        <label htmlFor="middle">Middle</label>
        <input
          type="checkbox"
          value={"middle"}
          id="middle"
          onChange={(e) => {
            e.preventDefault();
            setMiddle(!middleChecked);
          }}
        />
        <label htmlFor="senior">Senior</label>
        <input
          type="checkbox"
          value={"senior"}
          id="senior"
          onChange={(e) => {
            e.preventDefault();
            setSenior(!seniorChecked);
          }}
        />
      </div>
      <div className={styles["input-container"]}>
        <label htmlFor="description">Description</label>
        <textarea
          className={styles["textarea"]}
          ref={description}
          id="description"
          rows="10"
          cols="50"
          required
        />
      </div>
      <button className={styles.submit} type="submit" onClick={submitHandler}>
        Post New Job
      </button>
    </form>
  );
}
