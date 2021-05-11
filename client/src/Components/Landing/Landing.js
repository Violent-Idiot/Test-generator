import react, { useEffect, useState } from "react";

import axios from "axios";
import Quiz from "../Quiz/Quiz";
const Landing = () => {
  const [file, setFile] = useState(null);
  const [qList, setqList] = useState([]);

  const [questions, setQuestions] = useState([]);
  const [ans, setAns] = useState([]);

  useEffect(() => {
    console.log(file);
  }, [file]);
  useEffect(() => {
    console.log(questions);
  }, [questions]);

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
    <div data-testid="Landing">
      <input
        type="file"
        onChange={(file) => {
          setFile(file.target.files[0]);
        }}
      />
      <button onClick={handleSubmit}>submits</button>
      {questions && <Quiz questions={questions} ans={ans} />}
    </div>
  );
};

export default Landing;
