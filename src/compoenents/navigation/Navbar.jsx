import React from "react";
import { Link } from "react-router-dom";
import NotificationsMenu from "../NotificationsMenu/NotificationsMenu";
import styles from "./Navbar.module.css";
import Navigation from "./Navigation";
import Search from "./Search";
import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const addedNotificationFromEvent = () => {
    setIsActive((state) => !state);
    setTimeout(() => {
      setIsActive(false);
    }, 3000);
  };
  const visibleNotificationsHandler = () => {
    setIsActive((state) => !state);
  };
  const [width, setWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => setWidth(window.innerWidth));

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.navbar}
        // style={
        //   width > 1100 ? { visibility: "visible" } : { visibility: "hidden" }
        // }
      >
        <div className={styles.admin}>
          <Link style={{ textDecoration: "none", color: "white" }} to="/admin">
            Admin
          </Link>
        </div>
        <div className={styles["left-nav"]}>
          <Link className={styles.logo} to="/">
            <img src={require("../assets/logo.png")} alt="" />
          </Link>
          {width <= 1000 && <HamburgerMenu />}
        </div>
        <div className={styles["search-container"]}>
          <Search />
        </div>
        <div className={styles["right-nav"]}>
          <Navigation
            visibleNotificationsHandler={visibleNotificationsHandler}
            isActive={isActive}
          />
          <NotificationsMenu
            isActive={isActive}
            addedNotificationFromEvent={addedNotificationFromEvent}
          />
        </div>
      </div>
    </div>
  );
}
