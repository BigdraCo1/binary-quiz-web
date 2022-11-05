import React from "react";
import { FaGithub } from "react-icons/fa";
import "../css/Bottom.css"

const Bottom = () => {
  return (
    <div className="btm-layout">
      <div className="btm-text-layout">
        <h1 className="btm-text">following me at</h1>
        <a href="https://github.com/Bourbxn" target="_blank" rel="noreferrer">
          <FaGithub className="text-xl" />
        </a>
      </div>
    </div>
  );
};

export default Bottom;
