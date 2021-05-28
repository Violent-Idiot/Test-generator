import React, { useState } from "react";
import styles from "./Quiz.module.css";
import Header from "../Header/Header";
import Fade from "react-reveal/Fade";
const Quiz = (props) => {
  const [result, setResult] = useState(null);

  const { questions, ans } = props;

  const Evaluate = (e) => {
    var l = ans.length;
    var marks = 0;

    for (var a = 0; a < l; a++) {
      if (ans[a] === e.target.elements[a].value) {
        marks = marks + 1;
      }
    }

    setResult(marks);
  };

  return (
    <div className={styles.Main}>
      <Header />
      <div className={styles.Container}>
        <h1 id={styles.heading2}>Questions</h1>

        <form>
          <Fade left>
            <div className={styles.Element}>
              <div className={styles.Question}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam, earum!
              </div>

              <p id={styles.Answer}>Ans:</p>
              <input className={styles.Input} type="text" />
            </div>{" "}
          </Fade>
          <Fade right>
            <div className={styles.Element}>
              <div className={styles.Question}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam, earum!
              </div>
              <p id={styles.Answer}>Ans:</p>
              <input className={styles.Input} type="text" />
            </div>{" "}
          </Fade>
          <Fade left>
            <div className={styles.Element}>
              <div className={styles.Question}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam, earum!
              </div>
              <p id={styles.Answer}>Ans:</p>
              <input className={styles.Input} type="text" />
            </div>{" "}
          </Fade>
          <Fade right>
            <div className={styles.Element}>
              <div className={styles.Question}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam, earum!
              </div>
              <p id={styles.Answer}>Ans:</p>
              <input className={styles.Input} type="text" />
            </div>
          </Fade>
          <div>
            <button id={styles.Submit}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Quiz;
