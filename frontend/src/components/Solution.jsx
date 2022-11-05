import React from "react";
import "../css/Solution.css";

const Solution = ({ num1, num2, operator }) => {
  return (
    <div className="layout-solution">
      <h1 className="text-solution">{num1}</h1>
      <h1 className="text-solution px-3">{operator}</h1>
      <h1 className="text-solution">{num2}</h1>
    </div>
  );
};

export default Solution;
