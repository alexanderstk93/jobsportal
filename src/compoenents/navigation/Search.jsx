import React, { useRef, useState } from "react";
import styles from "./Search.module.css";
import { useDispatch } from "react-redux";
import { changeSearch } from "../store/StatusSlice";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Search() {
  const location = useLocation();
  const dispatch = useDispatch();
  const keyWordsFromStore = useSelector((state) => state.status.search);
  const [search, setSearch] = useState("");

  // We receive one string by 'searchContent', with this function we want to slice them to separate words
  const onSearchHandler = (event) => {
    const keyWords = [];

    if (event.key === "Enter" && search) {
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

      dispatch(changeSearch({ search: keyWords }));
    } else {
      dispatch(changeSearch({ search: "" }));
    }
  };

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
        onChange={(e) => setSearch(e.target.value.trim().toLowerCase())}
      />
    </div>
  );
}
