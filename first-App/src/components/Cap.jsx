/* eslint-disable react/prop-types */

/* eslint-disable no-unused-vars */
import React from "react";
import "./Cap.css";

const Cap = (props) => {
  return (
    <div className="card">
    
     <h1>{props.title}</h1>
     <p>{props.Description}</p>
    </div>
  );
};

export default Cap;
