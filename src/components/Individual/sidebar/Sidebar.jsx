/** @format */

import React from "react";
import "./sidebar.styles.scss";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-list">
        <ul className="sidebar-ul">
          <li className="sidebar-li">
            <a href="#demo">DEMO</a>
          </li>
          <li className="sidebar-li">
            <a href="#productfeatures">FEATURES</a>
          </li>
          <li className="sidebar-li">
            <a href="#payload">SPECIFICATION</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
