import React from "react";
import styles from "./FormExperience.module.css";
import { useDispatch } from "react-redux";
import { useRef, useState } from "react";
import {
  addWorkExperience,
  editWorkExperience,
  removeWorkExperience,
} from "../../../store/ResumeSlice";
import { switchChangesSaved } from "../../../store/StatusSlice";
import SaveChangesButton from "../../Buttons/SaveChangesButton";
import RemoveItemButton from "../../Buttons/RemoveItemButton";
import SaveNewItemFromFormButton from "../UniversalCard/SaveNewItemFromFormButton";
import { v4 as uuidv4 } from "uuid";

export default function FormExperience({
  id,
  jobName,
  companyName,
  city,
  description,
  newExperience,
}) {
  const dispatch = useDispatch();
  const jobNameForm = useRef("");
  const companyNameForm = useRef("");
  const cityForm = useRef("");
  const jobDescriptionForm = useRef("");

  const defaultValues = newExperience
    ? ""
    : { jobName, companyName, city, description };

  const validFields = () => {
    const valid =
      jobNameForm.current.value !== "" &&
      companyNameForm.current.value !== "" &&
      cityForm.current.value !== "" &&
      jobDescriptionForm.current.value !== "";
    return valid;
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (validFields()) {
      dispatch(
        editWorkExperience({
          id: id,
          jobName: jobNameForm.current.value,
          companyName: companyNameForm.current.value,
          city: cityForm.current.value,
          jobDescription: jobDescriptionForm.current.value,
        })
      );
      dispatch(switchChangesSaved(true));
    } else {
      window.alert("Every field must pe completed.");
    }
  };
  const onAddItem = (event) => {
    event.preventDefault();
    if (validFields()) {
      dispatch(
        addWorkExperience({
          id: uuidv4(),
          jobName: jobNameForm.current.value,
          companyName: companyNameForm.current.value,
          city: cityForm.current.value,
          jobDescription: jobDescriptionForm.current.value,
        })
      );
    } else {
      window.alert("Every field must pe completed.");
    }
    jobNameForm.current.value = "";
    companyNameForm.current.value = "";
    cityForm.current.value = "";
    jobDescriptionForm.current.value = "";
  };

  const onDelete = (event) => {
    event.preventDefault();
    if (window.confirm("Confirm action? (Delete Work Experience)")) {
      dispatch(removeWorkExperience(id));
    }
  };

  return (
    <form className={styles.form}>
      <div className={styles["input-container"]}>
        <label htmlFor="jobName">
          <i>Job Name:</i>
        </label>
        <input
          ref={jobNameForm}
          type="text"
          id="jobName"
          defaultValue={defaultValues.jobName}
        />
      </div>
      <div className={styles["input-container"]}>
        <label htmlFor="companyName">
          <i>Company Name:</i>
        </label>
        <input
          ref={companyNameForm}
          type="text"
          id="companyName"
          defaultValue={defaultValues.companyName}
        />
      </div>
      <div className={styles["input-container"]}>
        <label htmlFor="city">
          <i>City:</i>
        </label>
        <input
          ref={cityForm}
          type="text"
          id="city"
          defaultValue={defaultValues.city}
        />
      </div>

      <div className={styles["input-container"]}>
        <label htmlFor="description">
          <i>Describe your experience:</i>
        </label>
        <textarea
          ref={jobDescriptionForm}
          name=""
          id="description"
          cols="30"
          rows="10"
          defaultValue={defaultValues.description}
        ></textarea>
      </div>
      <div className={styles.controls}>
        {!newExperience && (
          <>
            <SaveChangesButton onClick={onSubmit} />
            <RemoveItemButton onClick={onDelete} />
          </>
        )}
        {newExperience && <SaveNewItemFromFormButton onClick={onAddItem} />}
      </div>
    </form>
  );
}
