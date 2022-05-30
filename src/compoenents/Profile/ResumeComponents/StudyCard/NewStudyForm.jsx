import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addStudy, editStudy } from "../../../store/ResumeSlice";
import RemoveItemButton from "../../Buttons/RemoveItemButton";
import SaveChangesButton from "../../Buttons/SaveChangesButton";
import SaveNewItemFromFormButton from "../UniversalCard/SaveNewItemFromFormButton";
import UniversalCard from "../UniversalCard/UniversalCard";
import UniversalEditPanel from "../UniversalCard/UniversalEditPanel";
import styles from "./NewStudyForm.module.css";

export default function NewStudyForm({
  id,
  newStudy,
  universityName,
  startDate,
  endDate,
  description,
}) {
  const dispatch = useDispatch();

  const universityNameForm = useRef("");
  const startDateForm = useRef("");
  const endDateForm = useRef("");
  const descriptionForm = useRef("");

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addStudy({
        university: universityNameForm.current.value,
        start: startDateForm.current.value,
        end: endDateForm.current.value,
        description: descriptionForm.current.value,
      })
    );
  };

  const onSaveChanges = (event) => {
    event.preventDefault();
    dispatch(
      editStudy({
        id: id,
        university: universityNameForm.current.value,
        start: startDateForm.current.value,
        end: endDateForm.current.value,
        description: descriptionForm.current.value,
      })
    );
  };

  const defaultValues = newStudy
    ? { universityName, startDate, endDate, description }
    : "";

  return (
    <form className={styles.form}>
      <div className={styles.inputContainer}>
        <label htmlFor="university">University Name</label>
        <input
          ref={universityNameForm}
          defaultValue={newStudy ? defaultValues.universityName : ""}
          type="text"
          id="university"
        />
      </div>
      <div className={styles.inputDateContainer}>
        <label htmlFor="start">Start</label>
        <input
          ref={startDateForm}
          defaultValue={newStudy ? defaultValues.startDate : ""}
          type="date"
          id="start"
          min="2015-05-26"
          max="2030-01-01"
        />
      </div>
      <div className={styles.inputDateContainer}>
        <label htmlFor="end">End</label>
        <input
          ref={endDateForm}
          defaultValue={newStudy ? defaultValues.endDate : ""}
          type="date"
          id="end"
          min="2022-05-26"
          max="2030-01-01"
        />
      </div>
      <div className={styles.textAreaContainer}>
        <label htmlFor="description">Description</label>
        <textarea
          ref={descriptionForm}
          defaultValue={newStudy ? defaultValues.description : ""}
          name=""
          id="description"
          cols="30"
          rows="10"
        ></textarea>
      </div>
      {newStudy && (
        <>
          <SaveChangesButton onClick={onSaveChanges} />
          <RemoveItemButton />
        </>
      )}
      {!newStudy && <SaveNewItemFromFormButton onClick={onSubmit} />}
    </form>
  );
}
