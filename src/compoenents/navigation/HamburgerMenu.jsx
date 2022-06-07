import React, { useState } from "react";
import styles from "./HamburgerMenu.module.css";
import Menu from "./Menu";
import Navigation from "./Navigation";

export default function HamburgerMenu() {
  const [isMenuActive, setIsMenuActive] = useState();

  const setInactiveMenu = () => {
    setIsMenuActive(false);
  };

  return (
    <div className={styles.container}>
      <img
        src={require("../assets/filter (2).png")}
        alt="dsadsa"
        onClick={() => setIsMenuActive(true)}
      />
      <div className={styles.menu}>
        {isMenuActive && <Menu setInactiveMenu={setInactiveMenu} />}
      </div>
    </div>
  );
}
