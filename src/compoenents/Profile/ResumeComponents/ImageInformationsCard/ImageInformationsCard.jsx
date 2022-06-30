import React from "react";
import UniversalCard from "../UniversalCard/UniversalCard";
import styles from "./ImageInformationsCard.module.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import EditImageInformations from "./EditImageInformations";
import Backdrop from "../Backdrop/Backdrop";

export default function ImageInformationsCard() {
  const resumeDetails = useSelector((state) => state.resume);
  const [showEditPanel, setShowEditPanel] = useState(false);
  const profileImage = useSelector((state) => state.resume.profileImage);
  const switchEditStatus = () => {
    setShowEditPanel((state) => !state);
  };

  return (
    <UniversalCard>
      <div className={styles.container}>
        <div className={styles["profile-image-container"]}>
          <img src={profileImage} alt="" />
          <h2>
            <i>{resumeDetails.name}</i>
          </h2>
          <p>
            <i>{resumeDetails.position}</i>
          </p>
        </div>
        <div className={styles["informations"]}>
          <div className={styles["informations-container"]}>
            <img src={require("../../../assets/phone-42-64.png")} alt="" />
            <p>
              <i>{resumeDetails.phoneNumber}</i>
            </p>
          </div>
          <div className={styles["informations-container"]}>
            <img src={require("../../../assets/comments-64.png")} alt="" />
            <p>
              <i>{resumeDetails.email}</i>
            </p>
          </div>
          <button className={styles["edit-profile"]} onClick={switchEditStatus}>
            Edit Profile
          </button>
        </div>
      </div>
      {showEditPanel && (
        <>
          <EditImageInformations />
          <Backdrop onClick={switchEditStatus} />
        </>
      )}
    </UniversalCard>
  );
}
