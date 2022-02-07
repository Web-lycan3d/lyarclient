/** @format */

import React from "react";
import "./dronevideo.styles.scss";

const DroneVideo = ({ url }) => {
  console.log(url);
  return (
    <div className="dronevideo-container" id="demo">
      <video controls>
        <source src={"../videos/" + url + ".mp4"} />
      </video>
    </div>
  );
};

export default DroneVideo;
