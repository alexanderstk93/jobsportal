import React from "react";
import styles from "./FilterOptionsCard.module.css";
import FilterCard from "./FilterCard";
import { useSelector, useDispatch } from "react-redux";
import { addKeyWord, deleteKeyWord } from "../store/StatusSlice";
export default function FilterOptionsCard({ itemsToRender, title }) {
  const keyWords = useSelector((state) => state.status.search);
  const dispatch = useDispatch();

  const loadFilterItems = () => {
    const itemsAsCheckbox = itemsToRender.map((item) => (
      <div className={styles["input-container"]} key={Math.random()}>
        <input
          type="checkbox"
          checked={keyWords.includes(item.toLowerCase()) ? true : false}
          value={item}
          id={item}
          onChange={(e) => {
            e.target.checked
              ? dispatch(addKeyWord({ keyWord: item.toLowerCase() }))
              : dispatch(deleteKeyWord({ keyWord: item.toLowerCase() }));
          }}
        />
        <label htmlFor={item}>{item}</label>
      </div>
    ));
    return itemsAsCheckbox;
  };

  return (
    <>
      <h2>
        <i>{title}</i>
      </h2>
      <FilterCard height={"auto"} padding={"1rem"}>
        {loadFilterItems()}
      </FilterCard>
    </>
  );
}
