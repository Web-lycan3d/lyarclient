/** @format */

import React from "react";

import { RiCloseFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navdots = ({ menuState, setmenuState }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, easings: "anticipate" }}
      className={
        menuState
          ? "nav-dots-dropdown nav-dots-dropdown-active"
          : "nav-dots-dropdown"
      }>
      <div className="nav-dots-header">
        <img
          src="https://i.ibb.co/2yQd05M/Group-1.webp"
          alt="logo"
          className="dot-brandlogo"
        />
        <div className="nav-hamburger" onClick={() => setmenuState(false)}>
          <RiCloseFill />
        </div>
      </div>
      <div className="nav-dots-contents">
        <div className="nav-dots-contents-left">
          <span>
            <sup>01/</sup>
            <Link to="/" onClick={() => setmenuState(false)}>
              HOME
            </Link>
          </span>
          <span onClick={() => setmenuState(false)}>
            <sup>02/</sup>
            <Link to={"/product/menu?areial=" + true}> MULTIROTOR</Link>
          </span>
          <span onClick={() => setmenuState(false)}>
            <sup>03/</sup>
            <Link to={"/product/menu?areial=" + false}> FIXED WING</Link>
          </span>
          <span onClick={() => setmenuState(false)}>
            <sup>04/</sup> <Link to="/swarm"> SWARM</Link>
          </span>
        </div>
        <div className="nav-dots-contents-right">
          <span onClick={() => setmenuState(false)}>
            <sup>05/</sup> <Link to="/about"> ABOUT</Link>
          </span>
          <span onClick={() => setmenuState(false)}>
            <sup>06/</sup> <Link to="/contact"> CONTACT</Link>
          </span>
          <span onClick={() => setmenuState(false)}>
            <sup>0//</sup> <Link to="/"> PRIVACY POLICY</Link>
          </span>
          <span onClick={() => setmenuState(false)}>
            <sup>09/</sup> <Link to="/"> TERMS OF USE</Link>
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default Navdots;
