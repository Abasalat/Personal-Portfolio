import React from "react";
import styles from "./Modal.module.css";
import { IoCloseSharp } from "react-icons/io5";

const Modalwebsite = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className={styles.container}>
      <div className={styles.parentmain}>
        <div className={styles.main}>
          <div className={styles.close}>
            {" "}
            <p onClick={onClose}>
              <IoCloseSharp />
            </p>
          </div>
          {/* Add your HTML cards here */}
          <div className="card">
            <div className="border">
              <h2 className={styles.link}>Al Pacino</h2>
            </div>
          </div>
          <div className="card ">
            <div className="border">
              <h2 className={styles.link}>Ben Stiller</h2>
            </div>
          </div>
          <div className="card">
            <div className="border">
              <h2 className={styles.link}>Patrick Stewart</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modalwebsite;
