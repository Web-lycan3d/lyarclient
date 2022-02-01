/** @format */
import React from "react";
import "./application.styles.scss";

const Sector = ({ app }) => {
  return (
    <div className="application-container">
      <div className="application-contents">
        <div className="application-img">
          <img src={app.app_img} alt="sector-img" />
        </div>
        <div className="application-details">
          <h1 className="application-h1">APPLICATIONS</h1>
          {app.app_array.map(({ title, desp, id }) => (
            <div className="application-list" key={id}>
              <p className="application-list-ptag">{title}</p>
              <span className="application-list-span">{desp}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sector;
