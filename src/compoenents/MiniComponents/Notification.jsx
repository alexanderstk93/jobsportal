import React from "react";
import styles from "./Notification.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fadeIn, shake, rotateIn, tada, fadeInDown } from "react-animations";
import styled, { keyframes } from "styled-components";

export default function Notification() {
  const FadeAnimation = styled.div`
    animation: 1s ${keyframes`${fadeInDown}`};
    position: fixed;
    top: 3rem;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 5;
  `;

  const applied = useSelector((state) => state.status.applied);
  const appliedTo = useSelector((state) => state.status.appliedTo);

  return (
    <>
      <FadeAnimation>
        <div
          className={styles.container}
          style={applied ? { visibility: "visible" } : { visibility: "hidden" }}
        >
          <img src={require("../assets/check.png")} alt="check" />
          <div className={styles.info}>
            <p>Succesfully applied.</p>
            <h3>{appliedTo}</h3>
          </div>
        </div>
      </FadeAnimation>
      <div
        className={styles.bar}
        style={applied ? { display: "block" } : { display: "none" }}
      ></div>
    </>
  );
}
