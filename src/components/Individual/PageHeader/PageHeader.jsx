/** @format */

import React from "react";
import Sidebar from "../sidebar/Sidebar";
import "./pageheader.styles.scss";
import { motion } from "framer-motion";

const PageHeader = ({ pageHeader }) => {
  return (
    <div className="pageheader-container">
      <div className="pageheader-contents">
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="pageheader-details">
          <div className="pageheader-details-flex">
            <h1 className="pageheader-h1">{pageHeader.name}</h1>
            <motion.img
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              src={pageHeader.svg}
              alt="drone png"
            />
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="pageheader-p">
            {pageHeader.text}
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="pageheader-img">
          <img src={pageHeader.img} alt="err" />
        </motion.div>
      </div>
      <div className="pageheader-sidebar">
        <Sidebar />
      </div>
    </div>
  );
};

export default PageHeader;
