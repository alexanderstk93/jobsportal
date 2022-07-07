import React from "react";
import styles from "./Resume.module.css";
import AbilitiesCard from "./ResumeComponents/AbilitiesCard/AbilitiesCard";
import AddSectionCard from "./ResumeComponents/AddSectionCard/AddSectionCard";
import DescriptionCard from "./ResumeComponents/DescriptionCard/DescriptionCard";
import ExperienceCard from "./ResumeComponents/ExperienceCard/ExperienceCard";
import ImageInformationsCard from "./ResumeComponents/ImageInformationsCard/ImageInformationsCard";
import LanguagesCard from "./ResumeComponents/LanguagesCard/LanguagesCard";
import ResumeLanguageBar from "./ResumeComponents/ResumeLanguageBar/ResumeLanguageBar";
import ResumeVisibilityCard from "./ResumeComponents/ResumeVisibilityCard/ResumeVisibilityCard";
import StudyCard from "./ResumeComponents/StudyCard/StudyCard";

export default function Resume() {
  return (
    <div className={styles.container}>
      <div className={styles["left-side"]}>
        <ImageInformationsCard />
        <ResumeVisibilityCard />
      </div>
      <div className={styles["right-side"]}>
        {/* <ResumeLanguageBar /> */}
        <DescriptionCard />
        <ExperienceCard />
        <StudyCard />
        <AbilitiesCard />
        <LanguagesCard />
      </div>
    </div>
  );
}
