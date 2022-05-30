import React, { useRef } from "react";
import UniversalEditPanel from "../UniversalCard/UniversalEditPanel";
import styles from "./EditAbilitiesPanel.module.css";
import { useDispatch, useSelector } from "react-redux";
import Ability from "./Ability";
import { addAbility } from "../../../store/ResumeSlice";

export default function EditAbilitiesPanel() {
  const abilities = useSelector((state) => state.resume.abilities);
  const dispatch = useDispatch();

  const abilityInput = useRef("");

  const loadAbilities = () => {
    const abilityItems = abilities.map((ability) => {
      return <Ability canRemove>{ability}</Ability>;
    });
    return abilityItems;
  };

  const onAddAbility = () => {
    dispatch(addAbility(abilityInput.current.value));
  };

  return (
    <UniversalEditPanel
      mainTitle={"Edit Abilities"}
      message1="We recommend to put here your most valuable abilities."
      message2="Try to not repeat yourself, better put few of them instead 
      of just throwing here abilities that are not valuable for your future employer."
    >
      <div className={styles.container}>
        <div className={styles.inputContainer}>
          <label htmlFor="ability">Type new abilities below</label>
          <input ref={abilityInput} type="text" id="ability" />
          <button className={styles.addButton} onClick={onAddAbility}>
            Add Ability
          </button>
        </div>
        <div className={styles.abilities}>{loadAbilities()}</div>
        <p className={styles.info}>
          <i>*Click the ability you want to remove.</i>
        </p>
      </div>
    </UniversalEditPanel>
  );
}
