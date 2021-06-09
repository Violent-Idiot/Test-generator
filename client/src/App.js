import logo from "./logo.svg";
import "./App.css";
import Landing from "../src/Components/Landing/Landing";
import Quiz from "./Components/Quiz/Quiz";
import About from "./Components/AboutUs/AboutUS";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [questions, setQuestions] = useState(null);
  const [ans, setAns] = useState(null);

  useEffect(() => {
    console.log(questions);
  }, [questions]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home/" />
          </Route>
          <Route path="/home">
<<<<<<< HEAD
            <Landing setQuestions={setQuestions} setAns={setAns} />
=======
            {
                questions? 
                <Redirect to="/Quiz" /> :
                <Landing setQuestions={setQuestions} setAns={setAns}  />
            }
>>>>>>> ac3d787af989680c1fc2c363eac6db2190eae7a8
          </Route>
          <Route path="/Quiz">
          {
                !questions? 
                <Redirect to="/home/" /> :
                <Quiz setQuestions={setQuestions} questions={questions} ans={ans} />
            }
          </Route>
          <Route path="/AboutUs">
            <About />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
