import React, { useState } from "react";
import styles from "./HamburgerMenu.module.css";
import Menu from "./Menu";

export default function HamburgerMenu() {
  const [isMenuActive, setIsMenuActive] = useState();

  const setInactiveMenu = () => {
    setIsMenuActive(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.bars} onClick={() => setIsMenuActive(true)}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
      <div className={styles.menu}>
        {isMenuActive && <Menu setInactiveMenu={setInactiveMenu} />}
      </div>
    </div>
  );
}
