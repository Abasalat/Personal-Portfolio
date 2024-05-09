import React, { useEffect } from "react";
import styles from "./Skills.module.css";
import $ from "jquery";
import "jquery-circle-progress";

const Skills = () => {
  const progressData = [
    { value: 0.85, text: "HTML", className: "html_css" },
    { value: 0.8, text: " CSS", className: "html_css" },
    { value: 0.7, text: "JavaScript", className: "js" },
    { value: 0.6, text: "React JS", className: "react" },
  ];

  useEffect(() => {
    progressData.forEach((item) => {
      const options = {
        startAngle: -1.55,
        size: 200,
        value: item.value,
        fill: { gradient: ["orange", "orangered"] },
      };

      $(`.${styles.circle} .${styles.bar}.${styles[item.className]}`)
        .circleProgress(options)
        .on("circle-animation-progress", function (event, progress, stepValue) {
          $(this)
            .parent()
            .find("span")
            .text(String(stepValue.toFixed(2).substr(2)) + "%");
        });
    });
  }, [progressData]);

  return (
    <div className={styles.main}>
      <h1 className={styles.heading}>Skills</h1>
      <div className={styles.wrapper}>
        {progressData.map((item, index) => (
          <div key={index} className={styles.circle}>
            <div className={`${styles.bar} ${styles[item.className]}`}>
              <div className={styles.box}>
                <span>{Math.round(item.value * 100)}%</span>
              </div>
            </div>
            <div className={styles.text}>{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
