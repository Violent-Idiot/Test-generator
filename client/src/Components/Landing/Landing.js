import react, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Landing.module.css";
import Header from "../Header/Header";
import Wave from "../../Assets/wave1.png";
import { AnimatePresence, motion } from 'framer-motion';
import Intro from './intro/intro';
import Uploader from './uploader/uploader';
import {Route, useLocation, Switch} from 'react-router-dom';



const Landing = (props) => {
  const [file, setFile] = useState(null);
  const [qList, setqList] = useState([]);
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

    formData.append("name", "abc123");
    formData.append("file", file);

    fetch("http://127.0.0.1:5000/upload", {
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
            a.push(res.answer);
          });
          setQuestions(q);
          setAns(a);
        });
      })
      .catch((error) => {
        console.error("Error:", error);
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
      <Header/>
      <div className={styles.main}>
        <div className={styles.introUploader}>
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.key}>
              <Route exact path="/home">
                <Intro />
              </Route>
              <Route path="/home/upload">
                <Uploader setFile={setFile} handleSubmit={handleSubmit}/>
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
