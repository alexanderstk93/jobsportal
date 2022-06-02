import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteKeyWord, addKeyWord } from "../store/StatusSlice";
import FilterCard from "./FilterCard";
import FilterOptionsCard from "./FilterOptionsCard";
import styles from "./JobFilter.module.css";
import { cities } from "./ListOfCities";
import { skills } from "./ListOfSkills";

export default function JobFilter() {
  const keyWords = useSelector((state) => state.status.search);
  const dispatch = useDispatch();

  const deleteIcon = <span>X</span>;

  const deleteKeyWordHandler = (keyWord) => {
    dispatch(deleteKeyWord({ keyWord: keyWord }));
  };

  const addKeyWordHandler = (keyWord) => {
    dispatch(addKeyWord({ keyWord: keyWord.toLowerCase() }));
  };

  const loadKeyWordsList = () => {
    const liElements = keyWords.map((keyWord) => (
      <li onClick={() => deleteKeyWordHandler(keyWord)} key={Math.random()}>
        {keyWord} {deleteIcon}
      </li>
    ));
    return liElements;
  };

  const width = useSelector((state) => state.status.width);
  console.log(width);

  return (
    <div className={width <= 1020 ? styles.mobile : styles.container}>
      <h2>
        <i>Filter</i>
      </h2>
      <FilterCard minHeight={"30%"}>
        <div className={styles.keywords}>
          <ul>{keyWords && loadKeyWordsList()}</ul>
        </div>
      </FilterCard>
      <FilterOptionsCard itemsToRender={cities} title={"City"} />
      <FilterOptionsCard itemsToRender={skills} title={"Experience"} />
    </div>
  );
}
