import React from "react";
import { useSelector } from "react-redux";
import UniversalCard from "../UniversalCard/UniversalCard";
import LanguageCard from "./LanguageCard";
import EditLanguagesPanel from "./EditLanguagesPanel";
import { useState } from "react";
import Backdrop from "../Backdrop/Backdrop";

export default function LanguagesCard() {
  const languages = useSelector((state) => state.resume.languagesKnown);

  const [editLanguages, setEditLanguages] = useState();

  const loadLanguages = () => {
    const languagesAsCard = languages.map((language) => (
      <LanguageCard key={Math.random()} level={language.level}>
        {language.language}
      </LanguageCard>
    ));
    return languagesAsCard;
  };

  return (
    <UniversalCard
      title={"Languages Known"}
      withEditButton={() => setEditLanguages(true)}
    >
      <div>{loadLanguages()}</div>
      {editLanguages && (
        <>
          <EditLanguagesPanel />
          <Backdrop onClick={() => setEditLanguages(false)} />
        </>
      )}
    </UniversalCard>
  );
}
