/** @format */

import React from "react";
import "./features.styles.scss";

const Features = ({ features }) => {
  return (
    <div className="feature-container" id="productfeatures">
      <h1 className="feature-h1">FEATURES</h1>
      <div className="feature-contents">
        <div className="feature-images">
          <img src={features.img} alt="error" />
        </div>
        <div className="feature-details">
          <div className="feature-row-1">
            {features.array.map(
              (item, index) =>
                index < 3 && (
                  <div className="feature-item" key={index}>
                    <img src={item.image} alt="error" />

                    <span className="feature-item-stag">{item.desp}</span>
                  </div>
                )
            )}
          </div>
          <div className="feature-row-2">
            {features.array.map(
              (item, index) =>
                index >= 3 &&
                index < 6 && (
                  <div className="feature-item" key={index}>
                    <img src={item.image} alt="error" />

                    <span className="feature-item-stag">{item.desp}</span>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
