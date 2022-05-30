import React from "react";
import styles from "./WelcomeSlider.module.css";

export default function WelcomeSlider() {
  return (
    <div className={styles.welcomeSlider}>
      <div className={styles.content}>
        <h1>Welcome</h1>
        <p>
          <i>Made by Stark Andrei.</i>
        </p>
      </div>
    </div>
  );
}
