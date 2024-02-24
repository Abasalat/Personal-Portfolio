import React from "react";
import Me5 from "../assets/Me5.png";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imagecontainer}>
          <img className={styles.image} src={Me5} alt="" />
        </div>
      </div>
      <div className={styles.right}>
        <h1>More About Myself</h1>
        <p>
          Meet Aba Salat, a passionate Front End Developer with a flair for
          crafting captivating digital experiences. Armed with a keen eye for
          design and proficiency in the latest web technologies, he transforms
          ideas into interactive realities that delight users. With a commitment
          to design and a knack for problem-solving.
        </p>
        <h2>Education</h2>
        <div>
          <span>Intermediate in CPCR College</span>
          <span>Matriculation in CPHSSR</span>
          <span>Kg-Coding Fronted Course</span>
          <span>Bachelors Degree in Computer Science</span>
        </div>
        <h2>Language</h2>
        <div>
          <p>Sindhi</p>
          <p>Urdu</p>
          <p>English</p>
        </div>
      </div>
    </div>
  );
};

export default About;
