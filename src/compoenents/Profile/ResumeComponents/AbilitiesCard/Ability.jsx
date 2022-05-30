import React from "react";
import styles from "./Ability.module.css";
import { useDispatch } from "react-redux";
import { removeAbility } from "../../../store/ResumeSlice";
export default function Ability({ children, canRemove }) {
  const dispatch = useDispatch();

  const onRemoveAbility = () => {
    dispatch(removeAbility(children));
  };

  return (
    <>
      {!canRemove ? (
        <div className={styles.container}>{children}</div>
      ) : (
        <div
          className={`${styles.container} ${styles.clickable}`}
          onClick={onRemoveAbility}
        >
          {children}
        </div>
      )}
    </>
  );
}
