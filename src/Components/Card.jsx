import React from "react";
import styles from "./Card.module.css";
import card1 from "../assets/card1.jpg";
import card2 from "../assets/Card2.jpg";
import card3 from "../assets/card3.jpg";
import { BsArrowUpRight } from "react-icons/bs";

const Card = () => {
  return (
    <div className={styles.fluidcontainer}>
      <div className={styles.container}>
        <div className={styles.card}>
          <h1>Portfolio</h1>
          <span className={styles.shadow}></span>
          <span className={styles.shadow1}></span>
          <img src={card1} className={styles.image} />
          <div className={styles.iconmain}>
            <div className={styles.icon}>
              <span>
                <BsArrowUpRight />
              </span>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <h1>Portfolio</h1>
          <span className={styles.shadow}></span>
          <span className={styles.shadow1}></span>
          <img src={card2} className={styles.image} />
          <div className={styles.iconmain}>
            <div className={styles.icon}>
              <span>
                <BsArrowUpRight />
              </span>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <h1>Portfolio</h1>
          <span className={styles.shadow}></span>
          <span className={styles.shadow1}></span>
          <img src={card3} className={styles.image} />
          <div className={styles.iconmain}>
            <div className={styles.icon}>
              <span>
                <BsArrowUpRight />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
