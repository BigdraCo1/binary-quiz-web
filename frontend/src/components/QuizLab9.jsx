import React, { useState } from "react";
import Solution from "./Solution";
import "../css/Quiz.css";

const QuizLab9 = () => {
  const decreaseNum2 = (num, op) => {
    if (op === 1 && num > 5) {
      num = (num % 5) + 1;
    }
    return num;
  };

  const getResult = (num1, num2, op) => {
    if (op === 0) {
      return num1 - num2;
    } else if (op === 1) {
      return num1 << num2;
    } else if (op === 2) {
      return num1 ^ num2;
    }
  };

  let initOperator = Math.floor(Math.random() * 3);
  let initNum1 = Math.floor(Math.random() * 129);
  let initNum2 = decreaseNum2(Math.floor(Math.random() * 129), initOperator);
  let initResult = getResult(initNum1, initNum2, initOperator);

  const operators = ["-", "<<", "^"];
  const [operator, setOperator] = useState(operators[initOperator]);
  const [num1, setNum1] = useState(
    (initNum1.toString(2) + "").padStart(8, "0")
  );
  const [num2, setNum2] = useState(
    (initNum2.toString(2) + "").padStart(8, "0")
  );
  const [result, setResult] = useState(initResult);
  const [ans, updateAns] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [isWrong, setIsWrong] = useState(false);

  const random = () => {
    setIsSubmit(false);
    setIsWrong(false);
    let randOperator = Math.floor(Math.random() * 3);
    let randNum1 = Math.floor(Math.random() * 129);
    let randNum2 = decreaseNum2(Math.floor(Math.random() * 129),randOperator);
    setOperator(operators[randOperator]);
    setNum1((randNum1.toString(2) + "").padStart(8, "0"));
    setNum2((randNum2.toString(2) + "").padStart(8, "0"));
    setResult(getResult(randNum1,randNum2,randOperator))
  };

  const submitAns = () => {
    setIsSubmit(true);
    const isCorrect = ans
      .toUpperCase()
      .localeCompare(result.toString(16).toUpperCase());
    if (isCorrect === 0) {
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
            Random
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizLab9;
