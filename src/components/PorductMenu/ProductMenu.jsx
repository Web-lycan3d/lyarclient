/** @format */
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./productmenu.styles.scss";
import ProductNavitems from "./ProductNavitems";
import { motion } from "framer-motion";

const ProductMenu = () => {
  const location = useLocation();

  const { areial } = window.Qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  const [selImg, setImg] = useState("");

  useEffect(() => {
    if (areial === "true") {
      setImg("https://i.ibb.co/x8nbN5n/Mask-Group-57.png");
    } else {
      setImg("https://i.ibb.co/Kxq9XTZ/Mask-Group-8.png");
    }
  }, [areial]);

  return (
    <div className="productmenu-container">
      <div className="productmenu-contents">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="productmenu-img">
          <img src={selImg} alt="error" />
        </motion.div>
        <div className="productmenu-nav">
          {areial === "true" ? (
            <React.Fragment>
              <ProductNavitems
                data={{
                  id: 1,
                  title: "AZURE",
                  content: "A compact yet powerful drone.",
                  img: "https://i.ibb.co/x8nbN5n/Mask-Group-57.png",
                }}
                setImg={setImg}
              />
              <ProductNavitems
                data={{
                  id: 2,
                  title: "ASTRA",
                  content: "A rugged and long-endurance drone",
                  img: "https://i.ibb.co/K9836Gx/Mask-Group-58.png",
                }}
                setImg={setImg}
              />
              <ProductNavitems
                data={{
                  id: 3,
                  title: "AERAS",
                  content: "A swift and dependable drone",
                  img: "https://i.ibb.co/KqY0PyG/Mask-Group-56.png",
                }}
                setImg={setImg}
              />
            </React.Fragment>
          ) : (
            <React.Fragment>
              <ProductNavitems
                data={{
                  id: 4,
                  title: "AETOS",
                  content: "A high precision bird's-eye UAV",
                  img: "https://i.ibb.co/Kxq9XTZ/Mask-Group-8.png",
                }}
                setImg={setImg}
              />
              <ProductNavitems
                data={{
                  id: 5,
                  title: "ORNIO",
                  content: "A silent yet deadly UAV",
                  img: "https://i.ibb.co/qj7FNZp/Mask-Group-60.png",
                }}
                setImg={setImg}
              />
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductMenu;
