import React from "react";
import styles from "./Search.module.css";
import { useDispatch } from "react-redux";
import { changeSearch } from "../store/StatusSlice";

export default function Search() {
  const dispatch = useDispatch();
  const onSearchHandler = (event) => {
    if (event.key === "Enter") {
      dispatch(
        changeSearch({ search: event.target.value.trim().toLowerCase() })
      );
      event.target.value = "";
      event.target.textContent = "";
    }
  };

  return (
    <div className={styles.search}>
      <img src={require("../assets/promotion.png")} alt="" />
      <input
        type="text"
        name=""
        id=""
        placeholder="Search.."
        onKeyPress={onSearchHandler}
      />
    </div>
  );
}
