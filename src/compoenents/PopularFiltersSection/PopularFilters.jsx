import React, { useState } from "react";
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

  const [width, setWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => setWidth(window.innerWidth));

  return (
    <div
      className={styles.container}
      style={width >= 1020 ? { display: "block" } : { display: "none" }}
    >
      <h2>Popular Filters:</h2>
      <ul>{loadPopularFiltersAsLi()}</ul>
    </div>
  );
}
