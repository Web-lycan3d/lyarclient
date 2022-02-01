/** @format */

import React from "react";
import "./dronevideo.styles.scss";

const DroneVideo = ({ url }) => {
  return (
    <div className="dronevideo-container" id="demo">
      <video controls>
        <source src={"../" + url + ".mp4"} />
      </video>
    </div>
  );
};

export default DroneVideo;
