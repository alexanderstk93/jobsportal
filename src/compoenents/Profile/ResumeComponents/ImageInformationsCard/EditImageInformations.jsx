import React from "react";
import styles from "./EditImageInformations.module.css";
import UniversalEditPanel from "../UniversalCard/UniversalEditPanel";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useRef } from "react";
import { editProfileInfo } from "../../../store/ResumeSlice";
import { useEffect } from "react";
import { changeApplied, switchChangesSaved } from "../../../store/StatusSlice";
import { addNotification } from "../../../store/NotificationsSlice";
import DoneAllIcon from "@mui/icons-material/DoneAll";
export default function EditImageInformations() {
  // name: "Dwayne Johnson",
  // position: "Actor",
  // phoneNumber: "0772 651 397",
  // email: "dwaynejohnson@contact.com",
  const profileInfo = {
    name: useSelector((state) => state.resume.name),
    position: useSelector((state) => state.resume.position),
    phoneNumber: useSelector((state) => state.resume.phoneNumber),
    email: useSelector((state) => state.resume.email),
  };
  const nameRef = useRef("");
  const positionRef = useRef("");
  const phoneNumberRef = useRef("");
  const emailRef = useRef("");
  const imageRef = useRef("");
  const dispatch = useDispatch();

  const saveNewInfo = (e) => {
    e.preventDefault();
    dispatch(
      addNotification({
        title: "Profile Info Updated",
        message: "You updated your profile info details.",
      })
    );
    dispatch(switchChangesSaved(true));
    dispatch(
      editProfileInfo({
        name: nameRef.current.value && nameRef.current.value,
        position: positionRef.current.value && positionRef.current.value,
        phoneNumber:
          phoneNumberRef.current.value && phoneNumberRef.current.value,
        email: emailRef.current.value && emailRef.current.value,
        profileImage: imageRef.current.value && emailRef.current.value,
      })
    );
  };

  return (
    <UniversalEditPanel
      mainTitle={"Edit Profile Info"}
      message1="Here is the panel where you can change your profile informations."
      message2="Try to double check your informations before saving. Imagine how bad it would be to pass a wrong phone number."
    >
      <form onSubmit={(e) => saveNewInfo(e)} className={styles.form}>
        <div className={styles.inputContainer}>
          <label htmlFor="fullName">Full Name</label>
          <input
            ref={nameRef}
            type="text"
            id="fullName"
            defaultValue={profileInfo.name}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="">Position</label>
          <input
            ref={positionRef}
            type="text"
            id=""
            defaultValue={profileInfo.position}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="">Phone Number</label>
          <input
            ref={phoneNumberRef}
            type="text"
            id=""
            required
            minLength={10}
            maxLength={10}
            defaultValue={profileInfo.phoneNumber}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="">E-Mail</label>
          <input
            ref={emailRef}
            type="email"
            id=""
            defaultValue={profileInfo.email}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="">New Image Link</label>
          <input ref={imageRef} type="text" id="" />
        </div>
        <button type="submit" className={styles.submit}>
          Edit
          <DoneAllIcon />
        </button>
      </form>
    </UniversalEditPanel>
  );
}
