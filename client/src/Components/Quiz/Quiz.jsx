import React, { useEffect, useState } from "react";
import styles from "./Quiz.module.css";
import Header from "../Header/Header";
import Fade from "react-reveal/Fade";
import { AnimatePresence, motion } from 'framer-motion';
const Quiz = (props) => {
  const [result, setResult] = useState(null);

  //const { questions, ans } = props;

  const [questions] = useState([
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, earum!",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, earum!",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, earum!",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, earum!",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, earum!",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, earum!",
  ])
  const [ans] = useState([
    "lorem ipsum",
    "lorem ipsum",
    "lorem ipsum",
    "lorem ipsum",
    "lorem ipsum",
    "lorem ipsum",
  ])

  const Evaluate = (e) => {
    e.preventDefault();
    var l = ans.length;
    var marks = 0;

    for (var a = 0; a < l; a++) {
      if (ans[a] === e.target.elements[a].value) {
        marks = marks + 1;
      }
    }

    setResult(marks);
  };

  useEffect(()=>{
    console.log(result);
  },[result])

  return (
    <div className={styles.Main}>
      <Header />
      <div className={styles.Container}>
        <Fade>
          <h1 id={styles.heading2}>Questions</h1>
        </Fade>
        <AnimatePresence exitBeforeEnter>
        {
          result===0 && 
              <motion.div
                initial={{opacity:0}}
                animate={{opacity:1}}
                exit={{opacity:0}} 
                className={styles.modalBackdrop}
              >
                <motion.div 
                  initial={{scale:0}}
                  animate={{scale:1}}
                  exit={{scale:0}} 
                  className={styles.modal}>
                  <h2>RESULTS</h2>
                  <p>SCORE {result}</p>
                  <button>ANSWER KEY</button>
                </motion.div>
              </motion.div>
        }
        {
          result>0 && 
              <motion.div
                initial={{opacity:0}}
                animate={{opacity:1}}
                exit={{opacity:0}} 
                className={styles.modalBackdrop}
              >
                <motion.div 
                  initial={{scale:0}}
                  animate={{scale:1}}
                  exit={{scale:0}} 
                  className={styles.modal}>
                  <h2>RESULTS</h2>
                  <p>SCORE {result}</p>
                  <button>ANSWER KEY</button>
                </motion.div>
              </motion.div>
        }
        </AnimatePresence>


        <form onSubmit={Evaluate}>
          {
            questions &&
            questions.map(
              data=>(
                <Fade bottom>
                  <div className={styles.Element}>
                    <div className={styles.Question}>
                      {data}
                    </div>
                    <p id={styles.Answer}>Ans:</p>
                    <input className={styles.Input} type="text" />
                  </div>
                </Fade>
              )
            )
          }
          <Fade bottom>
            <div>
              <button id={styles.Submit}>Submit</button>
            </div>
          </Fade>
        </form>
      </div>
    </div>
  );
};
export default Quiz;
