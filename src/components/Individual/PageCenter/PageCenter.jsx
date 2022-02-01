/** @format */

import React from "react";
import "./pagecenter.styles.scss";

const PageCenter = ({ pageCenter }) => {
  return (
    <div className="pagecenter-container">
      <div
        className="parrallax-bg"
        style={{
          background: `url(${pageCenter.bg}) no-repeat center`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}></div>
      <div className="pagecenter-text">
        <p>{pageCenter.text}</p>
      </div>

      <div className="pagecenter-img">
        <img src={pageCenter.img} alt="err" />
      </div>
    </div>
  );
};

export default PageCenter;
