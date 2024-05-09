import React from "react";
import styles from "./Contact.module.css";
const Contact = () => {
  return (
    <section id="contact" className={styles.main}>
      <p className={styles.text}>
        Bring you ideas here into interactive digital experieces
      </p>
      <div className={styles.buttons}>
        <button className={styles.btn}>View Resume</button>
        <button className={styles.btn}>Hire me</button>
      </div>
    </section>
  );
};

export default Contact;
