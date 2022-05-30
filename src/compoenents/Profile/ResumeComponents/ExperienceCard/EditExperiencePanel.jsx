import React from "react";
import AddNewCard from "../../Buttons/AddNewCard";
import UniversalEditPanel from "../UniversalCard/UniversalEditPanel";
import FormExperience from "./FormExperience";
import styles from "./EditExperiencePanel.module.css";

export default function EditExperiencePanel({ workExperiences }) {
  const loadFormsExperience = () => {
    const forms = workExperiences.map((experience, index) => {
      return (
        <>
          <h3 className={styles.experienceIndex}>Experience {index + 1}</h3>
          <FormExperience
            id={experience.id}
            jobName={experience.jobName}
            companyName={experience.companyName}
            city={experience.city}
            description={experience.jobDescription}
          />
        </>
      );
    });
    if (forms.length > 0) return forms;
  };

  return (
    <UniversalEditPanel
      // style={{ marginTop: "28rem" }}
      mainTitle={"Edit Work Experience"}
      message1="We recommend that you put here your related work experiences for the future employer."
      message2="Dont lie! Very important if you really want to get a new job. Try to be explicit and give relatable informations. Don't forget to describe your experience."
    >
      {loadFormsExperience()}
    </UniversalEditPanel>
  );
}
