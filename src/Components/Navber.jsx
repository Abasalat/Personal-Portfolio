import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbarcontainer}>
      <nav className={styles.navbar}>
        <div className={styles.navbarleft}>
          <ul className={styles.navbarnav}>
            <li className={styles.navitem}>
              <a className={styles.navlink} href="#">
                Profile
              </a>
            </li>
            <li className={styles.navitem}>
              <a className={styles.navlink} href="#">
                Projects
              </a>
            </li>
            <li className={styles.navitem}>
              <a className={styles.navlink} href="#">
                Resume
              </a>
            </li>
            <li className={styles.navitem}>
              <a className={styles.navlink} href="#">
                Skills
              </a>
            </li>
          </ul>
        </div>
        <div>
          {" "}
          <a className={styles.navbarbrand} href="#">
            Aba Salat
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
