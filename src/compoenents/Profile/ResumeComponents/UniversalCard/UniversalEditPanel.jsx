import React from "react";
import InfoMessages from "../InfoMessages/InfoMessages";
import styles from "./UniversalEditPanel.module.css";

export default function UniversalEditPanel({
  children,
  title,
  title1,
  message1,
  title2,
  message2,
}) {
  return (
    <div className={styles.container}>
      <h2>
        <i>{title}</i>
      </h2>
      <div className={styles["children-and-info"]}>
        <div className={styles.children}>{children}</div>
        <div className={styles.info}>
          <InfoMessages
            title1={title1}
            message1={message1}
            title2={title2}
            message2={message2}
          />
        </div>
      </div>
    </div>
  );
}
