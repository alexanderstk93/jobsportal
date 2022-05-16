import React, { useState } from "react";
import UniversalCard from "../UniversalCard/UniversalCard";

export default function AbilitiesCard() {

  const [showEditPanel, setShowEditPanel] = useState(false);

  return (
    <UniversalCard
      title={"Abilities"}
      withEditButton={() => setShowEditPanel((state) => !state)}
    >
      <div>AbilitiesCard</div>
    </UniversalCard>
  );
}
