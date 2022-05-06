import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import Navigation from "./Navigation";
import Search from "./Search";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles["left-nav"]}>
        <i>
          <Link className={styles.logo} to="/">
            Jobs Portal
          </Link>
        </i>
      </div>
      <div className={styles["search-container"]}>
        <Search />
      </div>
      <div className={styles["right-nav"]}>
        <Navigation />
      </div>
    </div>
  );
}
