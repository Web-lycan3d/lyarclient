/** @format */

import React from "react";

const SectorImg = ({ appAdv }) => {
  return (
    <div className="applicationadv-container">
      <h2 className="applicationadv-h2">SECTORS</h2>

      <div className="applicationadv-img">
        <img src={appAdv.img} alt="sectotimages" />
      </div>
    </div>
  );
};

export default SectorImg;
