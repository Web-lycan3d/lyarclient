/** @format */

import React from "react";
import "./drones.styles.scss";

const Drones = ({ drone }) => {
  return (
    <div className="drone-container">
      {drone.map((item) => (
        <div className="drone-contents">
          <h1>{item.name}</h1>
          <img className="drone-img" src={item.img} alt="error" />
        </div>
      ))}
    </div>
  );
};

export default Drones;
