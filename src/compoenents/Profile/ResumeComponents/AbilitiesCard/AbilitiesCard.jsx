import React, { useState } from "react";
import { useSelector } from "react-redux";
import UniversalCard from "../UniversalCard/UniversalCard";
import Ability from "./Ability";
import styles from "./AbilitiesCard.module.css";
import EditAbilitiesPanel from "./EditAbilitiesPanel";
import Backdrop from "../Backdrop/Backdrop";

export default function AbilitiesCard() {
  const [showEditPanel, setShowEditPanel] = useState(false);
  const abilities = useSelector((state) => state.resume.abilities);

  const loadAbilities = () => {
    const abilityItems = abilities.map((ability) => {
      return <Ability>{ability}</Ability>;
    });
    return abilityItems;
  };

  return (
    <UniversalCard
      title={"Abilities"}
      withEditButton={() => setShowEditPanel((state) => !state)}
    >
      {showEditPanel && (
        <>
          <EditAbilitiesPanel />
          <Backdrop onClick={() => setShowEditPanel(false)} />
        </>
      )}
      <div className={styles.abilities}>{loadAbilities()}</div>
    </UniversalCard>
  );
}
