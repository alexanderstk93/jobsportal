import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteKeyWord, addKeyWord, changeSearch } from "../store/StatusSlice";
import FilterCard from "./FilterCard";
import styles from "./JobFilter.module.css";
import { cities } from "./ListOfCities";

export default function JobFilter() {
  const keyWords = useSelector((state) => state.status.search);
  const dispatch = useDispatch();

  const deleteIcon = <span>X</span>;

  const deleteKeyWordHandler = (keyWord) => {
    dispatch(deleteKeyWord({ keyWord: keyWord }));
    // if (!keyWords) {
    //   dispatch(changeSearch({ search: [] }));
    // }
  };

  const addKeyWordHandler = (keyWord) => {
    dispatch(addKeyWord({ keyWord: keyWord.toLowerCase() }));
  };
  const loadKeyWordsList = () => {
    const liElements = keyWords.map((keyWord) => (
      <li onClick={() => deleteKeyWordHandler(keyWord)}>
        {keyWord} {deleteIcon}
      </li>
    ));
    return liElements;
  };

  const loadCities = () => {
    const citiesAsCheckbox = cities.map((city) => (
      <div className={styles["input-container"]}>
        <input
          type="checkbox"
          checked={keyWords.includes(city.toLowerCase()) ? true : false}
          value={city}
          id={city}
          onChange={(e) => {
            e.target.checked
              ? addKeyWordHandler(city)
              : deleteKeyWordHandler(city);
          }}
        />
        <label htmlFor={city}>{city}</label>
      </div>
    ));
    return citiesAsCheckbox;
  };

  return (
    <div className={styles.container}>
      <h1>Filter</h1>
      <FilterCard height={"auto"}>
        <div className={styles.keywords}>
          <ul>{keyWords && loadKeyWordsList()}</ul>
        </div>
      </FilterCard>
      <FilterCard height={"auto"} padding={"1rem"}>
        {loadCities()}
      </FilterCard>
    </div>
  );
}
