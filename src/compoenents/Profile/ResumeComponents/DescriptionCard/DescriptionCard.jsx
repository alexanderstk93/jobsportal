import React from "react";
import { useSelector } from "react-redux";
import EditCardButton from "../../EditCardButton/EditCardButton";
import UniversalCard from "../UniversalCard/UniversalCard";
import styles from "./DescriptionCard.module.css";
import { useState } from "react";
import EditDescriptionPanel from "./EditDescriptionPanel";
import Backdrop from "../Backdrop/Backdrop";
export default function DescriptionCard() {
  const description = useSelector((state) => state.resume.description);
  const [showEditPanel, setShowEditPanel] = useState(false);

  return (
    <UniversalCard
      title={"Description"}
      withEditButton={() => setShowEditPanel((state) => !state)}
    >
      <div className={styles.description}>{description}</div>
      {showEditPanel && <EditDescriptionPanel  />}
      {showEditPanel && (
        <Backdrop onClick={() => setShowEditPanel((state) => !state)} />
      )}
    </UniversalCard>
  );
}
