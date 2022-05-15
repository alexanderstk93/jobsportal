import React from "react";
import styles from "./Resume.module.css";
import AbilitiesCard from "./ResumeComponents/AbilitiesCard";
import AddSectionCard from "./ResumeComponents/AddSectionCard";
import DescriptionCard from "./ResumeComponents/DescriptionCard";
import ExperienceCard from "./ResumeComponents/ExperienceCard";
import ImageInformationsCard from "./ResumeComponents/ImageInformationsCard";
import LanguagesCard from "./ResumeComponents/LanguagesCard";
import ResumeLanguageBar from "./ResumeComponents/ResumeLanguageBar";
import ResumeVisibilityCard from "./ResumeComponents/ResumeVisibilityCard";
import StudyCard from "./ResumeComponents/StudyCard";

export default function Resume() {
  return (
    <div className={styles.container}>
      <div className={styles["left-side"]}>
        <ImageInformationsCard />
        <ResumeVisibilityCard />
      </div>
      <div className={styles["right-side"]}>
        <ResumeLanguageBar />
        <DescriptionCard />
        <ExperienceCard />
        <StudyCard />
        <AbilitiesCard />
        <LanguagesCard />
        <AddSectionCard />
      </div>
    </div>
  );
}
