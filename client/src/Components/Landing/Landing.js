import react, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Landing.module.css";
import Header from "../Header/Header";
import Wave from "../../Assets/wave1.png";
import { AnimatePresence, motion } from 'framer-motion';
import Intro from './intro/intro';
import Uploader from './uploader/uploader';
import {Route, useLocation, Switch, Redirect} from 'react-router-dom';
import load from '../../Assets/load1.gif';


const Landing = (props) => {
  const [file, setFile] = useState(null);
  const [text, setText] = useState(null);
  const [loader, setLoader] = useState(false);
  const location = useLocation();

  const {
    setQuestions,
    setAns
  } = props;

  useEffect(() => {
    console.log(file);
  }, [file]);
  /*
    fetch('http://127.0.0.1:5000/upload').then(
        res=>console.log(res)
    )
*/

  //for text-extraction: https://testpapergen.herokuapp.com/

  const handleSubmit = () => {
    const formData = new FormData();
    setLoader(true);

    formData.append("name", "abc123");
    formData.append("key", text);

    fetch("https://testpapergenerator.herokuapp.com/texttoquestion", {
      method: "POST",
      body: formData,
    })
      .then((result) => {
        result.json().then((res) => {
          var qa = res.data;
          var q = [];
          var a = [];
          console.log(res.data);
          qa.map((res) => {
            q.push(res.question);
            a.push(res.answers);
          });
          setQuestions(q);
          setAns(a);
          setLoader(false);
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoader(false);
      });
  };

  return (
    <div data-testid="Landing" className={styles.majorContainer} >
     {/* <input
        type="file"
        onChange={(file) => {
          setFile(file.target.files[0]);
        }}
      />
      <button onClick={handleSubmit}>submits</button>*/}
      {    
        loader &&
          <div className={styles.forAnimation}>
              <img src={load} className={styles.loading}/>
          </div>
      }
      <Header setQuestions={setQuestions}/>
      <div className={styles.main}>
        <div className={styles.introUploader}>
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.key}>
              <Route exact path="/home">
                <Intro />
              </Route>
              <Route path="/home/upload">
                <Uploader setFile={setFile} handleSubmit={handleSubmit} setText={setText} text={text} setLoader={setLoader} />
              </Route>
            </Switch>
            
          </AnimatePresence>
        </div>
        <div className={styles.logoContainer}>
          <img className={styles.waveCtn} src={Wave}/>

        </div>
      </div>
    </div>
  );
};

export default Landing;
