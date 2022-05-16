import React from "react";
import styles from "./EditDescriptionPanel.module.css";
import { useSelector } from "react-redux";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { editDescription } from "../../../store/ResumeSlice";
import { addNotification } from "../../../store/NotificationsSlice";
import InfoMessages from "../InfoMessages/InfoMessages";
import UniversalEditPanel from "../UniversalCard/UniversalEditPanel";

export default function EditDescriptionPanel({ saveChanges }) {
  const description = useSelector((state) => state.resume.description);
  const descriptionRef = useRef();
  const dispatch = useDispatch();

  const submitChangesHandler = () => {
    dispatch(editDescription(descriptionRef.current.value));
    dispatch(
      addNotification({
        title: "Description updated",
        message: "You updated your description details.",
      })
    );
  };

  return (
    <UniversalEditPanel
      title={"Edit Description"}
      title1={"What to complete here"}
      message1={
        "This section is used to describe your experiences, needs and future plans. Try to explain it as a big picture, don't go too far."
      }
      title2={"Expert advice"}
      message2={
        "Briefly highlight your most important professional milestones, such as years of experience, your main qualifications and / or your most attractive qualities as an employee."
      }
    >
      <div className={styles["edit-description"]}>
        <textarea
          ref={descriptionRef}
          type="text"
          id="description"
          defaultValue={description}
          rows={"15"}
        />
        <button
          onClick={() => {
            submitChangesHandler();
            saveChanges();
          }}
          type="button"
        >
          Save
        </button>
      </div>
    </UniversalEditPanel>
  );
}
