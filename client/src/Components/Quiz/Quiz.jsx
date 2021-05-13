import React, { useState } from "react";
import styles from "./Quiz.module.css";
const Quiz = (props) => {

  const [result, setResult] = useState(null);

  const {
    questions,
    ans
  } = props;

  const Evaluate = (e)=>{

    var l = ans.length;
    var marks = 0;

    for(var a = 0; a < l;a++){
      if(ans[a] === e.target.elements[a].value){
        marks = marks+1;
      }
    }

    setResult(marks);

  }


  return (
    <div className={styles.Main}>
      <div className={styles.Nav}>
        <p id={styles.heading1}>Group name</p>
        <p>Home</p>
        <p>About Us</p>
      </div>
      <div className={styles.Container}>
        <h1 id={styles.heading2}>Questions</h1>
        <form>
          <div className={styles.Element}>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, earum!
            </div>
            <div>
              Ans:
              <input className={styles.Answer} type="text" />
            </div>
          </div>{" "}
          <div className={styles.Element}>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, earum!
            </div>
            <div>
              Ans:
              <input className={styles.Answer} type="text" />
            </div>
          </div>{" "}
          <div className={styles.Element}>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, earum!
            </div>
            <div>
              Ans:
              <input className={styles.Answer} type="text" />
            </div>
          </div>{" "}
          <div className={styles.Element}>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, earum!
            </div>
            <div>
              Ans:
              <input className={styles.Answer} type="text" />
            </div>
          </div>
          <div>
            <button id={styles.Submit}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Quiz;
