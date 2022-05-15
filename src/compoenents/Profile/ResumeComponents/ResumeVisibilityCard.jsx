import React from "react";
import UniversalCard from "./UniversalCard";
import styles from "./ResumeVisibility.module.css";
import { useState } from "react";
import styled, { keyframes } from "styled-components";
import fadeIn from "react-animations/lib/fade-in";

export default function ResumeVisibilityCard() {
  const [visibility, setVisibility] = useState(true);
  const [infoMessage, setInfoMessage] = useState(false);

  const AnimationContainer = styled.div`
    animation: 0.5s ${keyframes`${fadeIn}`};
    position: relative;
  `;

  return (
    <UniversalCard>
      <div className={styles.container}>
        <div className={styles.status}>
          <div
            className={styles["status-buble"]}
            style={
              visibility
                ? { backgroundColor: "rgb(32,209,150)" }
                : { backgroundColor: "rgb(246,95,167)" }
            }
          ></div>
          <p>
            {visibility
              ? "Your CV is visible to employers"
              : "Your CV is hiden to employers "}
          </p>
          <div className={styles.info}>
            <h5
              onMouseOver={() => setInfoMessage(true)}
              onMouseLeave={() => setInfoMessage(false)}
            >
              <i>i</i>
            </h5>
            <AnimationContainer>
              <p
                style={
                  infoMessage
                    ? { visibility: "visible" }
                    : { visibility: "hidden" }
                }
              >
                We recommend that you make your CV visible, you'll have more
                chances to be called.
              </p>
            </AnimationContainer>
          </div>
        </div>
        <button
          onClick={() => setVisibility(!visibility)}
          style={
            visibility
              ? { backgroundColor: "rgb(246,95,167)" }
              : { backgroundColor: "rgb(32,209,150)" }
          }
        >
          Change Visibility
        </button>
      </div>
    </UniversalCard>
  );
}
