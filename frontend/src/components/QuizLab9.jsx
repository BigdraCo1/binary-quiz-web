import React, { useState } from "react";
import "../css/Quiz.css";
import Solution from "./Solution";
import {
  bin,
  getResult,
  randomNumber,
  randomOp,
  operators,
  setNumber,
  checkAns,
  setSubNumber,
} from "../utils/Functions";

const QuizLab9 = () => {
  let initOperator = randomOp();
  let initNum1 = randomNumber();
  let initNum2 = setNumber(randomNumber(), initOperator);
  [initNum1, initNum2] = setSubNumber([initNum1, initNum2], 0);
  let initResult = getResult(initNum1, initNum2, initOperator);
  const [operator, setOperator] = useState(operators(initOperator));
  const [num1, setNum1] = useState(bin(initNum1));
  const [num2, setNum2] = useState(bin(initNum2));
  const [result, setResult] = useState(initResult);
  const [ans, updateAns] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [isWrong, setIsWrong] = useState(false);

  const random = () => {
    setIsSubmit(false);
    setIsWrong(false);
    updateAns("");
    let randOperator = randomOp();
    let randNum1 = randomNumber();
    let randNum2 = setNumber(randomNumber(), randOperator);
    [randNum1, randNum2] = setSubNumber([randNum1, randNum2], 0);
    setOperator(operators(randOperator));
    setNum1(bin(randNum1));
    setNum2(bin(randNum2));
    setResult(getResult(randNum1, randNum2, randOperator));
  };

  const submitAns = () => {
    setIsSubmit(true);
    if (checkAns(ans, result)) {
      setIsSubmit(false);
      setIsWrong(false);
      random();
    } else {
      setIsWrong(true);
    }
    updateAns("");
  };

  return (
    <div className="layout-quiz">
      <div className="m-auto">
        <Solution num1={num1} num2={num2} operator={operator} />
        <form
          className="layout-inner-quiz"
          onSubmit={(event) => {
            event.preventDefault();
            submitAns();
          }}
        >
          <input
            type="text"
            value={ans}
            className="input-quiz"
            style={{
              borderColor: isSubmit && isWrong ? "#f43f5e" : "",
              borderWidth: isSubmit && isWrong ? "3px" : "",
              backgroundColor: isSubmit && isWrong ? "white" : "",
            }}
            onChange={(event) => updateAns(event.target.value)}
            onClick={() => setIsSubmit(false)}
          />
        </form>
        <div className="layout-button-quiz">
          <button className="submit-button" onClick={submitAns}>
            Submit
          </button>
          <button className="random-button" onClick={random}>
            Skip
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizLab9;
