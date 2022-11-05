import React from "react";
import { FaGithub } from "react-icons/fa";
import "../css/Bottom.css"

const Footer = () => {
  return (
    <div className="btm-layout">
      <div className="btm-text-layout">
        <h1 className="btm-text">following me at</h1>
        <a href="https://github.com/Bourbxn" target="_blank" rel="noreferrer">
          <FaGithub className="text-2xl" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
