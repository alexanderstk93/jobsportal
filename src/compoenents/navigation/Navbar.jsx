import React from "react";
import { Link } from "react-router-dom";
import NotificationsMenu from "../NotificationsMenu/NotificationsMenu";
import styles from "./Navbar.module.css";
import Navigation from "./Navigation";
import Search from "./Search";
import { useState } from "react";

export default function Navbar() {
  const [isActive, setIsActive] = useState(true);

  const visibleNotificationsHandler = () => {
    setIsActive((state) => !state);
  };
  const [width, setWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => setWidth(window.innerWidth));

  return (
    <div
      className={styles.navbar}
      style={
        width > 1100 ? { visibility: "visible" } : { visibility: "hidden" }
      }
    >
      <Link style={{ textDecoration: "none", color: "white" }} to="/admin">
        Admin
      </Link>
      <div className={styles["left-nav"]}>
        <Link className={styles.logo} to="/">
          <img src={require("../assets/logo.png")} alt="" />
        </Link>
      </div>
      <div className={styles["search-container"]}>
        <Search />
      </div>
      <div className={styles["right-nav"]}>
        <Navigation
          visibleNotificationsHandler={visibleNotificationsHandler}
          isActive={isActive}
        />
        <NotificationsMenu isActive={isActive} />
      </div>
    </div>
  );
}
