import React, { useState } from "react";
import SubSolution from "../components/SubSolution";
import "../css/Quiz.css";
import { bin4, checkBinHex, randomNumBin } from "../utils/Functions";

const QuizBinHex = () => {
  let initNum = randomNumBin();
  const [num, setNum] = useState(bin4(initNum));
  const [ans, updateAns] = useState("");
  const [result, setResult] = useState(initNum);
  const [isSubmit, setIsSubmit] = useState(false);
  const [isWrong, setIsWrong] = useState(false);

  const randomNum = () => {
    setIsSubmit(false);
    setIsWrong(false);
    updateAns("");
    let randNum1 = randomNumBin();
    setNum(bin4(randNum1));
    setResult(randNum1);
  };

  const submitAns = () => {
    setIsSubmit(true);
    if (checkBinHex(ans, result)) {
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
        <SubSolution num={num} />
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
            autoFocus
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

export default QuizBinHex;
