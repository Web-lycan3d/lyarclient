/** @format */

import React from "react";
import { Link } from "react-router-dom";
import "./footer.styles.scss";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <div className="footer-brandlogo">
          <img src="https://i.ibb.co/2yQd05M/Group-1.webp" alt="logo" />
        </div>
        <Link className="footer-atag" to={"/product/menu?areial=" + true}>
          MULTIROTOR
        </Link>
        <Link className="footer-atag" to={"/product/menu?areial=" + false}>
          FIXED WING
        </Link>
        <Link className="footer-atag" to="/gcs">
          GCS
        </Link>
        <Link className="footer-atag" to="/swarm">
          SWARM
        </Link>
        <Link className="footer-atag" to="/about">
          ABOUT US
        </Link>
        <Link className="footer-atag" to="/contact">
          CONTACT US
        </Link>
      </div>
      <div className="footer-center">
        <span className="footer-spantag">
          Copyright© 2022 Bangalore, India | All rights Reserved
        </span>
      </div>
      <div className="footer-right">
        <FaFacebookSquare />
        <FaInstagram />
        <FaLinkedin />
        <FaTwitterSquare />
      </div>
    </div>
  );
};

export default Footer;
