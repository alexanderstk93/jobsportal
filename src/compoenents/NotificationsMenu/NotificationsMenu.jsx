import React from "react";
import styles from "./NotificationsMenu.module.css";
import { AnimationContainer } from "./AnimationContainer.styled";
import { useDispatch, useSelector } from "react-redux";
import { addNotification } from "../store/NotificationsSlice";

export default function NotificationsMenu({
  isActive,
}) {
  const getNotifications = useSelector((state) => state.notifications);
  console.log(getNotifications);
  const dispatch = useDispatch();

  const loadNotifications = () => {
    const notifications = getNotifications.map((notification) => (
      <div className={styles.notification}>
        <img src={require("../assets/chat.png")} alt="" />
        <div className={styles.details}>
          <h3>
            <i>{notification.title}</i>
          </h3>
          <p>{notification.message}</p>
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
