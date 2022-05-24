import React from "react";
import UniversalCard from "../UniversalCard/UniversalCard";
import FormExperience from "./FormExperience";
import styles from "./AddExperiencePanel.module.css";

export default function AddExperiencePanel() {
  return (
    <div className={styles.newExperienceFormContainer}>
      <FormExperience newExperience />
    </div>
  );
}
