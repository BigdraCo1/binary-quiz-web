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

  const randomNum = () => {
    let randNum1 = Math.floor(Math.random() * 129);
    let randNum2 = Math.floor(Math.random() * 129);
    setNum1((randNum1.toString(2) + "").padStart(8, "0"));
    setNum2((randNum2.toString(2) + "").padStart(8, "0"));
    setSum(randNum1 + randNum2);
  };

  const submitAns = () => {
    const isCorrect = ans
      .toUpperCase()
      .localeCompare(sum.toString(16).toUpperCase());
    console.log(sum.toString(16).toUpperCase())
    if (isCorrect === 0) {
      console.log("true");
      randomNum();
    } else {
      console.log("false");
    }
    updateAns("");
  };

  return (
    <div className="layout-quiz">
      <div className="m-auto">
        <Solution num1={num1} num2={num2} />
        <div className="layout-inner-quiz">
          <input
            type="text"
            value={ans}
            className="input-quiz"
            onChange={(event) => updateAns(event.target.value)}
          />
        </div>
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
