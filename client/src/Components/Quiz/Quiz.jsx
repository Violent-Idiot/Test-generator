import React from "react";
import styles from "./Quiz.module.css";
const Quiz = () => {
  return (
    <div className={styles.Main}>
      <h3>QUIZ TIME</h3>
      <div className={styles.Element}>
        <p>
          1 . Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          voluptates obcaecati quidem assumenda recusandae eligendi consequuntur
          in voluptate quod illo?
        </p>

        <input type="text" placeholder="Type your answer here" />
      </div>{" "}
      <div className={styles.Element}>
        <p>
          2 . Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          voluptates obcaecati quidem assumenda recusandae eligendi consequuntur
          in voluptate quod illo?
        </p>

        <input type="text" placeholder="Type your answer here" />
      </div>{" "}
      <div className={styles.Element}>
        <p>
          3 . Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          voluptates obcaecati quidem assumenda recusandae eligendi consequuntur
          in voluptate quod illo?
        </p>

        <input type="text" placeholder="Type your answer here" />
      </div>{" "}
      <div className={styles.Element}>
        <p>
          4 . Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          voluptates obcaecati quidem assumenda recusandae eligendi consequuntur
          in voluptate quod illo?
        </p>

        <input type="text" placeholder="Type your answer here" />
      </div>{" "}
      <div className={styles.Element}>
        <p>
          5 . Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          voluptates obcaecati quidem assumenda recusandae eligendi consequuntur
          in voluptate quod illo?
        </p>

        <input type="text" placeholder="Type your answer here" />
      </div>{" "}
      <div className={styles.Element}>
        <p>
          6 . Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          voluptates obcaecati quidem assumenda recusandae eligendi consequuntur
          in voluptate quod illo?
        </p>

        <input type="text" placeholder="Type your answer here" />
      </div>
    </div>
  );
};
export default Quiz;
