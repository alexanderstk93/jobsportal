import React from "react";
import EditCardButton from "../../EditCardButton/EditCardButton";
import styles from "./UniversalCard.module.css";
import { useState } from "react";

export default function UniversalCard({ children, withEditButton, title }) {
  const [editButtonVisible, setEditButtonVisible] = useState(false);

  return (
    <div className={styles.container}>
      <div
        className={withEditButton ? styles.topbar : null}
        onMouseEnter={() => setEditButtonVisible((state) => !state)}
        onMouseLeave={() => setEditButtonVisible((state) => !state)}
      >
        <h3>
          <i>{title}</i>
        </h3>
        {withEditButton ? (
          <EditCardButton
            onClick={() => withEditButton()}
            style={
              editButtonVisible
                ? { visibility: "visible" }
                : { visibility: "hidden" }
            }
          />
        ) : null}
      </div>
      <div>{children}</div>
    </div>
  );
}
