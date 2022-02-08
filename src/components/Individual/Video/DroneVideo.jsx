/** @format */

import React from "react";
import "./dronevideo.styles.scss";

const DroneVideo = ({ url, poster }) => {
  return (
    <div className="dronevideo-container" id="demo">
      <video controls poster={poster}>
        <source src={"../videos/" + url + ".mp4"} />
      </video>
    </div>
  );
};

export default DroneVideo;
