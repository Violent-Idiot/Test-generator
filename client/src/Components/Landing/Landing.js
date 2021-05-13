import react, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Landing.module.css";
import Header from "../Header/Header";
import Wave from "../../Assets/wave2.svg";




const Landing = (props) => {
  const [file, setFile] = useState(null);
  const [qList, setqList] = useState([]);

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
          <div className={styles.intro}>
            <h1>
              Test<br/>Paper<br/>Generator
            </h1>
            <p>
              Our system generates questions based on the pdf that you have uploaded. Just upload your pdf and voila you now have questions
            </p>
          </div>
          <div className={styles.buttonContainer}>
            <button>
              LETS GET STARTED
            </button>
          </div>
        </div>
        <div className={styles.logoContainer}>
         {/* <div className={styles.waveCtn}>
            <img src={Wave}/>
            </div> */}

        </div>
      </div>
    </div>
  );
};

export default Landing;
