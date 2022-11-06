import React, { useState } from "react";
import Solution from "./Solution";
import "../css/Quiz.css";
import { bin, checkAns, randomNumber } from "../utils/Functions";

const QuizXor = () => {
  let initNum1 = randomNumber();
  let initNum2 = randomNumber();
  let initSum = initNum1 | initNum2;

  const [num1, setNum1] = useState(bin(initNum1));
  const [num2, setNum2] = useState(bin(initNum2));
  const [sum, setSum] = useState(initSum);
  const [ans, updateAns] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [isWrong, setIsWrong] = useState(false);

  const randomNum = () => {
    setIsSubmit(false);
    setIsWrong(false);
    let randNum1 = randomNumber();
    let randNum2 = randomNumber();
    setNum1(bin(randNum1));
    setNum2(bin(randNum2));
    setSum(randNum1 | randNum2);
  };

  const submitAns = () => {
    setIsSubmit(true);
    if (checkAns(ans, sum)) {
      setIsSubmit(false);
      setIsWrong(false);
      randomNum();
    } else {
      setIsWrong(true);
    }
    updateAns("");
  };

  return (
    <div className="layout-quiz">
      <div className="m-auto">
        <Solution num1={num1} num2={num2} operator={"|"} />
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
          <button className="random-button" onClick={randomNum}>
            Skip
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizXor;
