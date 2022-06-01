import React, { useEffect } from "react";
import styles from "./NotificationsMenu.module.css";
import { AnimationContainer } from "./AnimationContainer.styled";
import { useSelector } from "react-redux";

export default function NotificationsMenu({ isActive }) {
  const getNotifications = useSelector((state) => state.notifications);

  const loadNotifications = () => {
    const notifications = getNotifications.map((notification) => (
      <div className={styles.notification}>
        <img src={require("../assets/chat.png")} alt="" />
        <div className={styles.details}>
          <h3>
            <i>{notification.title}</i>
          </h3>
          <div className={styles["message-and-time"]}>
            <p>{notification.message}</p>
            <span>
              <i>{notification.time}</i>
            </span>
          </div>
        </div>
      </div>
    ));
    return notifications;
  };

  return (
    <AnimationContainer
      style={isActive ? { display: "block" } : { display: "none" }}
    >
      {loadNotifications()}
    </AnimationContainer>
  );
}
