import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.main}>
      <p className={styles.text}>
        Bring you ideas here into interactive digital experieces
      </p>
      <div className={styles.buttons}>
        <button className={styles.btn}>View Resume</button>
        <button className={styles.btn}>Hire me</button>
      </div>
      <div className={styles.contacts}>
        <div className={styles.contact}>
          <IoCallOutline />
          <p>+923138023211</p>
        </div>
        <div className={styles.contact}>
          <CiLinkedin />
          <p>Aba Salat</p>
        </div>
        <div className={styles.contact}>
          <CiMail />
          <p>abasalat2023@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
