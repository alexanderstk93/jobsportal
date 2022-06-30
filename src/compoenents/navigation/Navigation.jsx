import React from "react";
import styles from "./Navigation.module.css";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navigation({ visibleNotificationsHandler }) {
  const width = useSelector((state) => state.status.width);

  const profileImage = useSelector((state) => state.resume.profileImage);
  const currentLocation = useLocation();

  return (
    <>
      <ul className={styles.navigation}>
        <li className={styles.profile}>
          {width >= 1020 && <img src={profileImage} alt="" />}
          <Link to={"/profile"}>
            {width <= 1020 &&
            (currentLocation.pathname === "/" ||
              currentLocation.pathname === "/jobview") ? (
              <img src={profileImage} alt="the rock" />
            ) : null}
            {width >= 1020 && "Profile"}
          </Link>
        </li>
        <li
          onClick={() => visibleNotificationsHandler()}
          className={styles.notifications}
        >
          {width >= 1020 && (
            <img src={require("../assets/message.png")} alt="messages" />
          )}
          {width >= 1020 ? (
            <p>Messages</p>
          ) : (
            <img src={require("../assets/message.png")} alt="messages" />
          )}
        </li>
      </ul>
    </>
  );
}
