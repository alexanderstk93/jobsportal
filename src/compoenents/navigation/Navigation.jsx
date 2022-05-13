import React from "react";
import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";

export default function Navigation({ visibleNotificationsHandler, isActive }) {
  return (
    <>
      <ul className={styles.navigation}>
        <li className={styles.profile}>
          <img src={require("../assets/the-rock.png")} alt="the rock" />
          <Link className={styles.profile} to={"/profile"}>
            Profile
          </Link>
        </li>
        <li
          onClick={() => visibleNotificationsHandler()}
          className={styles.notifications}
        >
          <img src={require("../assets/message.png")} alt="messages" />
          <p>Messages</p>
        </li>
      </ul>
    </>
  );
}
