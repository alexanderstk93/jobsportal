import React, { useRef, useState } from "react";
import styles from "./Search.module.css";
import { useDispatch } from "react-redux";
import { changeSearch } from "../store/StatusSlice";
import { useLocation } from "react-router-dom";

export default function Search() {
  const location = useLocation();
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");

  // We receive one string by 'searchContent', with this function we want to slice them to separate words
  const onSearchHandler = (event) => {
    const keyWords = [];
    if (event.key === "Enter") {
      let currentKeyWord = "";
      for (let i = 0; i < search.length; i++) {
        if (search[i] !== " ") {
          currentKeyWord += search[i];
        } else if (search[i] === " ") {
          !keyWords.includes(currentKeyWord) && keyWords.push(currentKeyWord);
          currentKeyWord = "";
        }
        if (search[i + 1] === undefined) {
          !keyWords.includes(currentKeyWord) && keyWords.push(currentKeyWord);
        }
      }
      let foundBiggerKeyWord = false;
      for (let i = 0; i < keyWords.length; i++) {
        if (keyWords[i].length > 12) {
          window.alert(
            "Each keyword of your search must have a maximum of 8 characters."
          );
          foundBiggerKeyWord = true;
          dispatch(changeSearch({ search: [] }));
        }
        if (i === keyWords.length - 1 && foundBiggerKeyWord === false) {
          dispatch(changeSearch({ search: keyWords }));
        }
      }
    } else if (!search) {
      dispatch(changeSearch({ search: [] }));
    }
  };

  return (
    <div
      className={styles.search}
      style={
        location.pathname === "/" ? { display: "flex" } : { display: "none" }
      }
    >
      <img src={require("../assets/search.png")} alt="" />
      <input
        type="text"
        name=""
        id=""
        placeholder="Search.."
        onKeyPress={onSearchHandler}
        onChange={(e) => {
          if (!e.target.value) dispatch(changeSearch({ search: [] }));
          else setSearch(e.target.value.trim().toLowerCase());
        }}
      />
    </div>
  );
}
