/** @format */
import "./gcs.styles.scss";

import React from "react";
import Features from "../../components/Individual/Features/Features";
import Sidebar from "../../components/Individual/sidebar/Sidebar";
import { motion } from "framer-motion";
import { Scroll } from "../../components/Scroll";

const Gcs = () => {
  Scroll();

  const gcsData = [
    {
      features: [
        {
          id: 1,
          image: "https://i.ibb.co/xLkbKnT/Group-9877.png",
          desp: "Even after a target has been selected, the mission can be aborted in about 5 seconds.",
        },
        {
          id: 2,
          image: "https://i.ibb.co/56sDdKR/Group-9878.png",
          desp: "Using high speed and accuracy, the UAV is able to instantly lock on a target and attack.",
        },
        {
          id: 3,
          image: "https://i.ibb.co/y52Rn6F/Group-9879.png",
          desp: "High stabilised live stream video recording can be performed.",
        },
        {
          id: 4,
          image: "https://i.ibb.co/20rmwBq/Group-9880.png",
          desp: "Not detected as easily by radar systems.",
        },
        {
          id: 5,
          image: "https://i.ibb.co/XFNjXxN/Group-9881-2x.png",
          desp: "Ability to plan and execute automated flight missions.",
        },
        {
          id: 6,
          image: "https://i.ibb.co/86zrfz2/Group-9882.png",
          desp: "Ability to loiter around a target area and track specific objects.",
        },
      ],
      feature_Img: "https://i.ibb.co/3s777KM/Group-10358.png",
    },
  ];

  return (
    <div className="gcs-container">
      <div className="gcs-contents">
        <div className="gcs-header">
          <div className="gcs-header-details">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="gcs-header-details-text">
              <h4>GROUND CONTROL STATION</h4>
              <img src="https://i.ibb.co/Wy56jRR/Group-9778.png" alt="err" />
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}>
              Ground Control Systems (GCS) refers to an integrated rugged
              solution for controlling drones. Currently, we are developing our
              own ground control systems that will include software for
              monitoring and controlling drones remotely through computer
              systems which includes features like Hands On Throttle and Stick
              Compatibility, Extended Range, ADSB feature and a feature to
              control multiple drones/UAV’s that essentially act as an ATC for
              the aerial systems.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="gcs-header-img">
            <img src="https://i.ibb.co/wJMhxRT/Group-10354.png" alt="err" />
          </motion.div>
          <div className="gcs-sidebar">
            <Sidebar />
          </div>
        </div>
      </div>
      <div className="gcs-benifits">
        <div className="gcs-benifits-contents">
          <div className="gcs-benifits-img">
            <img
              src="https://i.ibb.co/XXJmfqP/UAV-Ground-Control-Station-D14-2k.png"
              alt=""
            />
          </div>
          <div className="gcs-benifits-text">
            <h5 className="gcs-h5tag">BENEFITS</h5>
            <p>
              This ensures reduction of manual efforts during preflight
              checkups, continuous monitoring of the UAVs, provides visual
              alerts in undesired conditions to help with guidance as well as a
              Manual to Auto switch option.This ensures reduction of manual
              efforts during preflight checkups, continuous monitoring of the
              UAVs, provides visual alerts in undesired conditions to help with
              guidance as well as a Manual to Auto switch option.
            </p>
          </div>
        </div>
      </div>
      <Features
        features={{
          img: gcsData[0].feature_Img,
          array: gcsData[0].features,
        }}
      />
      <div className="gcs-payload-container">
        <h6 className="gcs-h6tag">HARDWARE SPECIFICATION</h6>
        <div className="gcs-payload-contents">
          <div className="gcs-payload-details">
            <img src="https://i.ibb.co/MByKF0j/Group-10339.png" alt="" />
          </div>
          <div className="gcs-payload-img">
            <img
              src="https://i.ibb.co/MRhWByN/UAV-Ground-Control-Station-I01-2k.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gcs;
