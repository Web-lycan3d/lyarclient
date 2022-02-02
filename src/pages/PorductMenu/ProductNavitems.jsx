/** @format */

import React from "react";
import { RiArrowLeftSLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProductNavitems = ({ data, setImg }) => {
  return (
    <React.Fragment>
      <Link className="productmenu-atag" to={"/drone/" + data.id}>
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: data.id / 4 }}
          className="productmenu-nav-item"
          onPointerOver={() => setImg(data.img)}>
          <div className="productmenu-nav-item-contents">
            <h3>{data.title}</h3>
            <span>{data.content}</span>
          </div>
          <RiArrowLeftSLine className="productmenu-arrow" />
        </motion.div>
      </Link>
    </React.Fragment>
  );
};

export default ProductNavitems;
