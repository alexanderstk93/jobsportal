import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLanguage, removeLanguage } from "../../../store/ResumeSlice";
import UniversalEditPanel from "../UniversalCard/UniversalEditPanel";
import styles from "./EditLanguagesPanel.module.css";
import SaveChangesButton from "../../Buttons/SaveChangesButton";
import { switchChangesSaved } from "../../../store/StatusSlice";

export default function EditLanguagesPanel() {
  const languages = useSelector((state) => state.resume.languagesKnown);
  const languageSelected = useRef();
  const levelSelected = useRef();

  const dispatch = useDispatch();
  const [showDeleteButton, setShowDeleteButton] = useState(false);

  const EditLanguageCard = ({ language, level }) => {
    return (
      <div
        className={styles.activeLanguage}
        onMouseEnter={() => setShowDeleteButton(true)}
        onMouseLeave={() => setShowDeleteButton(false)}
      >
        <p>{language}</p>
        <p>{level}</p>
        <span
          onClick={() => dispatch(removeLanguage(language))}
          className={styles.delete}
          style={
            showDeleteButton
              ? { visibility: "visible" }
              : { visibility: "hidden" }
          }
        >
          X
        </span>
      </div>
    );
  };

  const loadLanguages = () => {
    const languagesAsEditCard = languages.map((language) => (
      <EditLanguageCard language={language.language} level={language.level} />
    ));
    return languagesAsEditCard;
  };

  return (
    <UniversalEditPanel mainTitle={"Edit Languages Known"}>
      {loadLanguages()}
      <div className={styles.addLanguage}>
        <label htmlFor="language">
          <i>Choose new language to add</i>
        </label>
        <div className={styles.choicesContainer}>
          <p>Language</p>
          <select ref={languageSelected} name="" id="language">
            <option value="English">English</option>
            <option value="Romanian">Romanian</option>
            <option value="English">German</option>
            <option value="German">Spanish</option>
            <option value="French">French</option>
            <option value="Arabic">Arabic</option>
            <option value="Bengali">Bengali</option>
            <option value="Czech">Czech</option>
          </select>
          <p>Level</p>
          <select ref={levelSelected} name="" id="level">
            <option value="Beginner">Beginner</option>
            <option value="Mediocre">Mediocre</option>
            <option value="Advanced">Advanced</option>
            <option value="Native">Native</option>
          </select>
        </div>
        <SaveChangesButton
          onClick={() => {
            if (
              languages.filter(
                (language) =>
                  language.language === languageSelected.current.value
              ).length === 0
            ) {
              dispatch(
                addLanguage({
                  language: languageSelected.current.value,
                  level: levelSelected.current.value,
                })
              );
              dispatch(switchChangesSaved(true));
            } else {
              window.alert("Language already added.");
            }
          }}
        />
      </div>
    </UniversalEditPanel>
  );
}
