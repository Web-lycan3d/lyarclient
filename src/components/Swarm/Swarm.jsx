/** @format */

import "./swarm.styles.scss";

import React from "react";
import { motion } from "framer-motion";

const Swarm = () => {
  return (
    <div className="swarm-container">
      <div className="swarm-contents">
        <div className="swarm-details">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.25 }}
            exit={{ opacity: 0, y: 20 }}
            className="swarm-details-header">
            <h3 className="swarm-h3tag">
              SWARM <span>SYSTEM</span>
            </h3>
            <img src="https://i.ibb.co/x1qgrfG/Group-9870.png" alt="err" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.25, delay: 0.2 }}
            exit={{ opacity: 0, y: 20 }}
            className="swarm-ptag">
            We are developing peer-to-peer communication systems that enable
            multiple drones to communicate with each other and operate as a
            group. The drone swarm operates through a decentralised command and
            control structure that enables them to complete the required task
            until the last drone is airborne. This is accomplished by algorithms
            that create communication architectures that are encrypted and
            change randomly to prevent signal spoofing. Software manages the
            entire operation from launch to end.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.25, delay: 0.5 }}
          exit={{ opacity: 0 }}
          className="swarm-img">
          <img
            src="https://i.ibb.co/9bPM4Sr/image-placeholder-title-1.webp"
            alt="err"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Swarm;
