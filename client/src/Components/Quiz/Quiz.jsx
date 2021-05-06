import React, { useEffect, useState } from "react";
import styles from "./Quiz.module.css";
const Quiz = () => {

  const [questions,setQuestions] = useState([
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptates obcaecati quidem assumenda recusandae eligendi consequuntur in voluptate quod illo?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptates obcaecati quidem assumenda recusandae eligendi consequuntur in voluptate quod illo?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptates obcaecati quidem assumenda recusandae eligendi consequuntur in voluptate quod illo?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptates obcaecati quidem assumenda recusandae eligendi consequuntur in voluptate quod illo?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptates obcaecati quidem assumenda recusandae eligendi consequuntur in voluptate quod illo?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptates obcaecati quidem assumenda recusandae eligendi consequuntur in voluptate quod illo?"
  ])
  const [ans,setAns] = useState([
    "lorem ipsum",
    "lorem ipsum",
    "lorem ipsum",
    "lorem ipsum",
    "lorem ipsum",
    "lorem ipsum"
  ])
  const [marks,setMarks] = useState(null)



  const handleSubmit = (e)=>{
    e.preventDefault();
    var ctr = 0;

    for(var a=0;a<ans.length;a++){

      var submits =  e.target.elements[a].value; 

      if(ans[a] === submits){
        ctr++;
      }

    }


    setMarks(ctr);

  }

  useEffect(()=>{
    console.log(marks)
  },[marks])


  return (
    <div className={styles.Main}>
      <h3>QUIZ TIME</h3>
      {
        marks && 
        <div>
          <h2>score : {marks}</h2>
        </div>
      }
      <form onSubmit={handleSubmit}>
          {questions.map((ques, index) => 
              <div className={styles.Element}>
                <p>
                  {index+1}.{ques}
                </p>
                <input type="text" placeholder="Type your answer here"/>
              </div>
            )}
            <input type="submit"/>
      </form>
    </div>
  );
};
export default Quiz;
