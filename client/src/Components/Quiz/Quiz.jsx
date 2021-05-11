import React from "react";
import styles from "./Quiz.module.css";
const Quiz = () => {
  return (
    <div className={styles.Main}>
      <div className={styles.Nav}>
        <p id={styles.heading1}>Group name</p>
        <p>Home</p>
        <p>About Us</p>
      </div>
      <div className={styles.Container}>
        <h1 id={styles.heading2}>Questions</h1>
        <div className={styles.Element}>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            earum!
          </div>
          <div>
            Ans:
            <input className={styles.Answer} type="text" />
          </div>
        </div>{" "}
        <div className={styles.Element}>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            earum!
          </div>
          <div>
            Ans:
            <input className={styles.Answer} type="text" />
          </div>
        </div>{" "}
        <div className={styles.Element}>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            earum!
          </div>
          <div>
            Ans:
            <input className={styles.Answer} type="text" />
          </div>
        </div>{" "}
        <div className={styles.Element}>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            earum!
          </div>
          <div>
            Ans:
            <input className={styles.Answer} type="text" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Quiz;
