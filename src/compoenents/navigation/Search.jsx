import React from "react";
import styles from "./Search.module.css";
import { useDispatch } from "react-redux";
import { changeSearch } from "../store/StatusSlice";
import { useLocation } from "react-router-dom";

export default function Search() {
  const location = useLocation();
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
  console.log(location);
  return (
    <div
      className={styles.search}
      style={
        location.pathname === "/" ? { display: "flex" } : { display: "none" }
      }
    >
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
