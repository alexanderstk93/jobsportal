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
        <Navigation
          visibleNotificationsHandler={visibleNotificationsHandler}
          isActive={isActive}
        />
        <NotificationsMenu isActive={isActive} />
      </div>
    </div>
  );
}
