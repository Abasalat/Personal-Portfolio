import React from "react";
import Me4 from "../assets/Me4.png";
import styles from "./Home.module.css"; // Import external CSS file for styling
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import Navber from "./Navber";

const Home = () => {
  return (
    <div className={styles.homecontainer}>
      <Navber />

      <div className={styles.main}>
        <div className={styles.left}>
          <p>Hello,</p>
          <h1>I am Aba Salat</h1>
          <h1>Front-end web Developer</h1>
          <p>transforming ideas into interactive digital experiences</p>
          <a className={styles.viewresume}>View Resume</a>
        </div>
        <div className={styles.right}>
          <div className={styles.imagecontainer}>
            <div className={styles.iconcontainer}>
              <a className={styles.icon}>
                <FaLinkedinIn />
              </a>
              <a className={styles.icon}>
                <IoLogoGithub />
              </a>
              <a className={styles.icon}>
                <AiFillTwitterCircle />
              </a>
              <a className={styles.icon}>
                <FaInstagramSquare />
              </a>
            </div>
            <img className={styles.img1} src={Me4} alt="Aba Salat" />
          </div>
        </div>
      </div>
      <div className={styles.works}>
        <div className={styles.work}>
          <span>1+</span>
          <p>Years Of Experience</p>
        </div>
        <div className={styles.work}>
          <span>11+</span>
          <p>Projects Completed</p>
        </div>
        <div className={styles.work}>
          <span>20+</span>
          <p>Satisfied Clients</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
