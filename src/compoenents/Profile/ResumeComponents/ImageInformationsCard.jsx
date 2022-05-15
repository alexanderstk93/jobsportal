import React from "react";
import UniversalCard from "./UniversalCard";
import styles from "./ImageInformationsCard.module.css";
import { useSelector } from "react-redux";

export default function ImageInformationsCard() {
  const resumeDetails = useSelector((state) => state.resume);

  return (
    <UniversalCard>
      <div className={styles.container}>
        <div className={styles["profile-image-container"]}>
          <img src={require("../../assets/the-rock.png")} alt="" />
          <h2>
            <i>{resumeDetails.name}</i>
          </h2>
          <p>
            <i>{resumeDetails.position}</i>
          </p>
        </div>
        <div className={styles["informations"]}>
          <div className={styles["informations-container"]}>
            <img src={require("../../assets/phone-42-64.png")} alt="" />
            <p>
              <i>{resumeDetails.phoneNumber}</i>
            </p>
          </div>
          <div className={styles["informations-container"]}>
            <img src={require("../../assets/comments-64.png")} alt="" />
            <p>
              <i>{resumeDetails.email}</i>
            </p>
          </div>
          <button className={styles["edit-profile"]}>Edit Profile</button>
        </div>
      </div>
    </UniversalCard>
  );
}
