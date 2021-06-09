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
            <Landing setQuestions={setQuestions} setAns={setAns} />
          </Route>
          <Route path="/Quiz">
            <Quiz questions={questions} ans={ans} />
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
