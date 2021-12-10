import React from "react";
import "./project.css"
import { Link } from "react-router-dom";
let data = require("../data/Discord_final_output.json");

function Project2() {
  
  return (
        <div className="sign-in-section">
      <div className="sign-in-container">
        <h1>{data[2].project_name}</h1>
        <br />
          <span className="sign-in-email-text">{data[2].post}</span>
          <Link className="noDec" to="/nfts">
            <button className="sign-in-button">Go Back</button>
            </Link>
      </div>
    </div>
  );
}

export default Project2;
