import React, { useState } from "react";

import styles from "./LanguageCard.module.css";

export default function LanguageCard({ children, level }) {

  return (
    <div className={styles.container}>
      <div className={styles.languageAndLevel}>
        <h3>{children}</h3>
        <p>
          <i>{level}</i>
        </p>
      </div>
    </div>
  );
}
