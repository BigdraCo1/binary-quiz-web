import React, { useState } from "react";
import Solution from "./Solution";
import "../css/Quiz.css";

const Quiz = () => {
  let initNum1 = Math.floor(Math.random() * 129);
  let initNum2 = Math.floor(Math.random() * 129);
  let initSum = initNum1 + initNum2;

  const [num1, setNum1] = useState(
    (initNum1.toString(2) + "").padStart(8, "0")
  );
  const [num2, setNum2] = useState(
    (initNum2.toString(2) + "").padStart(8, "0")
  );
  const [sum, setSum] = useState(initSum);
  const [ans, updateAns] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [isWrong, setIsWrong] = useState(false);

  const randomNum = () => {
    setIsSubmit(false);
    setIsWrong(false);
    let randNum1 = Math.floor(Math.random() * 129);
    let randNum2 = Math.floor(Math.random() * 129);
    setNum1((randNum1.toString(2) + "").padStart(8, "0"));
    setNum2((randNum2.toString(2) + "").padStart(8, "0"));
    setSum(randNum1 + randNum2);
  };

  const submitAns = () => {
    setIsSubmit(true);
    const isCorrect = ans
      .toUpperCase()
      .localeCompare(sum.toString(16).toUpperCase());
    console.log(sum.toString(16).toUpperCase());
    if (isCorrect === 0) {
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
        <Solution num1={num1} num2={num2} />
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
            Random
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
