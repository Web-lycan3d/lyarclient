/** @format */
import React from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import MicroDrone from "./pages/MicroDrone";
import Navbar from "./components/navbar/Navbar";
import ProductMenu from "./pages/PorductMenu/ProductMenu";

import Swarm from "./pages/Swarm/Swarm";
import Gcs from "./pages/gcs/Gcs";
import About from "./pages/About/About";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";
import Landing from "./pages/landing/Landing";

function App() {
  const location = useLocation();

  return (
    <React.Fragment>
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Landing />} />
          <Route path="/product/menu" element={<ProductMenu />} />
          <Route path="/drone/:id" element={<MicroDrone />} />
          <Route path="/swarm" element={<Swarm />} />
          <Route path="/gcs" element={<Gcs />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </React.Fragment>
  );
}

export default App;
