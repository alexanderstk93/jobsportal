import React, { useState } from "react";
import AddNewCard from "../../Buttons/AddNewCard";
import UniversalCard from "../UniversalCard/UniversalCard";
import { useSelector } from "react-redux";
import Study from "./Study";
import NewStudyForm from "./NewStudyForm";
import Backdrop from "../Backdrop/Backdrop";
import styles from "./StudyCard.module.css";
import EditStudiesPanel from "./EditStudiesPanel";

export default function StudyCard() {
  const studies = useSelector((state) => state.resume.study);
  const [addNewStudy, setAddNewStudy] = useState(false);
  const [editStudies, setEditStudies] = useState(false);

  const loadStudies = () => {
    const studiesAsStudyCard = studies.map((study) => (
      <>
        <Study
          university={study.university}
          start={study.start}
          end={study.end}
          description={study.description}
        />
        {studies.length > 1 ? <div className={styles.lineBreak}></div> : null}
      </>
    ));
    console.log(studies);
    return studiesAsStudyCard;
  };

  return (
    <UniversalCard
      title={"Study"}
      withEditButton={() => setEditStudies((state) => !state)}
    >
      <div>{loadStudies()}</div>
      <AddNewCard onClick={() => setAddNewStudy((state) => !state)} />
      {addNewStudy && <NewStudyForm />}
      {editStudies && (
        <>
          <EditStudiesPanel />
          <Backdrop onClick={() => setEditStudies((state) => !state)} />
        </>
      )}
    </UniversalCard>
  );
}
