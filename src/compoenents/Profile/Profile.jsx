import React from "react";
import styles from "./Profile.module.css";
import Resume from "./Resume";

export default function Profile() {
  return (
    <div className={styles.container}>
      <h2
        style={{
          position: "absolute",
          top: "4rem",
          left: "50%",
          display: "block",
          margin: "0 auto",
          color: "red",
        }}
      >
        Section under Development
      </h2>
      <Resume />
    </div>
  );
}
