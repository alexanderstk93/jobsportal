import React from "react";
import { useSelector } from "react-redux";
import UniversalEditPanel from "../UniversalCard/UniversalEditPanel";
import styles from "./EditStudiesPanel.module.css";
import NewStudyForm from "./NewStudyForm";

export default function EditStudiesPanel() {
  const studies = useSelector((state) => state.resume.study);
  const loadStudiesForm = () => {
    const forms = studies.map((study, index) => {
      return (
        <>
          <h3 style={{ textAlign: "center" }}>Study {index + 1}</h3>
          <NewStudyForm
            id={study.id}
            newStudy
            universityName={study.university}
            startDate={study.start}
            endDate={study.end}
            description={study.description}
          />
        </>
      );
    });
    return forms;
  };

  return (
    <UniversalEditPanel
      mainTitle="Edit Studies"
      message1="We recommend that you put here your related studies for the future employer."
      message2="Dont lie! Very important if you really want to get a new job. Try to be explicit and give relatable informations. Don't forget to describe your experience."
    >
      {loadStudiesForm()}
    </UniversalEditPanel>
  );
}
