import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addKeyWord } from "../store/StatusSlice";
import styles from "./PopularFilters.module.css";
import { PopularFiltersArray } from "./PopularFiltersStore";

export default function PopularFilters() {
  const dispatch = useDispatch();

  const loadPopularFiltersAsLi = () => {
    const liElements = PopularFiltersArray.map((filter) => (
      <li onClick={() => dispatch(addKeyWord({ keyWord: filter }))}>
        {filter}
      </li>
    ));
    return liElements;
  };

  return (
    <div className={styles.container}>
      <h2>Popular Filters:</h2>
      <ul>{loadPopularFiltersAsLi()}</ul>
    </div>
  );
}
