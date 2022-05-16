import React from "react";
import UniversalCard from "../UniversalCard/UniversalCard";
import { useState } from "react";

export default function AddSectionCard() {
  const [showEditPanel, setShowEditPanel] = useState(false);

  return (
    <UniversalCard
      title={"Add Section"}
      withEditButton={() => setShowEditPanel((state) => !state)}
    >
      AddSectionCard
    </UniversalCard>
  );
}
