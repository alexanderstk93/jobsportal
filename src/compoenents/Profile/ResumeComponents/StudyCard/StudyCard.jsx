import React from "react";
import AddNewCard from "../../Buttons/AddNewCard";
import UniversalCard from "../UniversalCard/UniversalCard";
import { useSelector } from "react-redux";
import Study from "./Study";

export default function StudyCard() {
  const studies = useSelector((state) => state.resume.study);

  const loadStudies = () => {
    const studiesAsStudyCard = studies.map((study) => (
      <Study
        university={study.university}
        start={study.start}
        end={study.end}
      />
    ));
    console.log(studies);
    return studiesAsStudyCard;
  };

  return (
    <UniversalCard title={"Study"} withEditButton>
      <div>{loadStudies()}</div>
      <AddNewCard />
    </UniversalCard>
  );
}
