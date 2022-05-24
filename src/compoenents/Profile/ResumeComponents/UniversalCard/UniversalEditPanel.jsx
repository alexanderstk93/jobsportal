import React from "react";
import InfoMessages from "../InfoMessages/InfoMessages";
import styles from "./UniversalEditPanel.module.css";

export default function UniversalEditPanel({
  children,
  mainTitle,
  title1,
  message1,
  title2,
  message2,
  style,
}) {
  return (
    <div className={styles.container} style={style}>
      <h2>
        <i>{mainTitle}</i>
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
