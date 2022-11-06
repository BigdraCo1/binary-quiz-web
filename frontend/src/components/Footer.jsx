import React from "react";
import { FaGithub } from "react-icons/fa";
import "../css/Footer.css"

const Footer = () => {
  return (
    <div className="btm-layout">
      <div className="btm-text-layout">
        <h1 className="btm-text">following me at</h1>
        <a href="https://github.com/Bourbxn" target="_blank" rel="noreferrer">
          <FaGithub className="btm-logo" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
