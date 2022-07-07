import React from "react";
import EditCardButton from "../../EditCardButton/EditCardButton";
import UniversalCard from "../UniversalCard/UniversalCard";
import { useState } from "react";
import EditExperiencePanel from "./EditExperiencePanel";
import Backdrop from "../Backdrop/Backdrop";
import ExperienceContainer from "./ExperienceContainer";
import { useSelector } from "react-redux";
import AddNewCard from "../../Buttons/AddNewCard";
import styles from "./ExperienceCard.module.css";
import AddExperiencePanel from "./AddExperiencePanel";

export default function ExperienceCard() {
  const [showEditPanel, setShowEditPanel] = useState(false);
  const [showAddExperiencePanel, setShowAddExperiencePanel] = useState(false);

  const workExperiences = useSelector((state) => state.resume.workExperience);

  const loadWorkExperiences = () => {
    const workExperiencesContainers = workExperiences.map((experience) => {
      return (
        <>
          <ExperienceContainer
            key={Math.random()}
            jobName={experience.jobName}
            companyName={experience.companyName}
            city={experience.city}
            jobDescription={experience.jobDescription}
          />
          {workExperiences.length > 1 ? (
            <div className={styles.lineBreak}></div>
          ) : null}
        </>
      );
    });
    return workExperiencesContainers;
  };

  return (
    <UniversalCard
      title="Work Experience"
      withEditButton={
        workExperiences.length > 0
          ? () => setShowEditPanel((state) => !state)
          : false
      }
    >
      {showEditPanel && (
        <>
          <EditExperiencePanel workExperiences={workExperiences} />
          <Backdrop onClick={() => setShowEditPanel((state) => !state)} />
        </>
      )}

      {loadWorkExperiences()}

      <AddNewCard
        onClick={() => setShowAddExperiencePanel((state) => !state)}
      />
      {showAddExperiencePanel && <AddExperiencePanel />}
    </UniversalCard>
  );
}
