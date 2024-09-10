import React from "react";
import "../css/Solution.css";

const SubSolution = ({ num }) => {
  return (
    <div className="layout-solution">
      <h1 className="text-solution">{num}</h1>
    </div>
  );
};

export default SubSolution;
