import React from "react";
import EditCardButton from "../../EditCardButton/EditCardButton";
import UniversalCard from "../UniversalCard/UniversalCard";

export default function StudyCard() {
  return (
    <UniversalCard title={"Study"} withEditButton>
      <div>StudyCard</div>
    </UniversalCard>
  );
}
