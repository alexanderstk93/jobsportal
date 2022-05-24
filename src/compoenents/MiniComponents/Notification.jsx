import React from "react";
import styles from "./Notification.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fadeIn, shake, rotateIn, tada, fadeInDown } from "react-animations";
import styled, { keyframes } from "styled-components";
import {
  changeApplied,
  changeStatus,
  switchChangesSaved,
} from "../store/StatusSlice";

export default function Notification() {
  const FadeAnimation = styled.div`
    animation: 1s ${keyframes`${fadeInDown}`};
    position: fixed;
    top: 3rem;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 5;
  `;
  const dispatch = useDispatch();
  const applied = useSelector((state) => state.status.applied);
  const appliedTo = useSelector((state) => state.status.appliedTo);
  const changesSaved = useSelector((state) => state.status.changesSaved);

  if (applied) {
    setTimeout(() => {
      dispatch(changeStatus(false));
    }, 3000);
  }
  if (changesSaved) {
    setTimeout(() => {
      dispatch(switchChangesSaved(false));
    }, 3000);
  }

  return (
    <>
      <FadeAnimation>
        <div
          className={styles.container}
          style={
            applied || changesSaved
              ? { visibility: "visible" }
              : { visibility: "hidden" }
          }
        >
          <img src={require("../assets/check.png")} alt="check" />
          <div className={styles.info}>
            <p>
              {applied ? "Succesfully applied." : "Changes saved succesfully."}
            </p>
            {applied ? <h3>{appliedTo}</h3> : null}
          </div>
        </div>
      </FadeAnimation>
      <div
        className={styles.bar}
        style={
          applied || changesSaved ? { display: "block" } : { display: "none" }
        }
      ></div>
    </>
  );
}
