/** @format */

import React from "react";
import "./landing.styles.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="landing-contents">
        <div className="landing-slider">
          <Swiper
            modules={[Navigation, Pagination]}
            pagination={true}
            navigation={true}
            spaceBetween={0}
            slidesPerView={1}
            className="mySwiper"
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}>
            <SwiperSlide>
              <div className="slider-item">
                <video>
                  <source src="../Aeras.mp4" />
                </video>
              </div>{" "}
              Slide 1
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-item"></div> Slide 2
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-item"></div> Slide 3
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-item"></div> Slide 4
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="landing-content-1">
        <div className="landing-content-1-details">
          <img src="https://i.ibb.co/GFYzSDj/Path-224924.png" alt="err" />
          <span>
            At Lycan Aerospace, we develop high-performance and reliable UAVs
            and Drones that offer superior designs and features that are ideal
            for endurance, flight control, stability and safety. Our aerial
            systems are widely used for a broad range of industrial and
            commercial applications which include aerial mapping, surveying,
            inspections, surveillance and much more.
          </span>
        </div>
      </div>
      <div className="landing-content-2">
        <h1>OUR PRODUCTS</h1>
        <div className="landing-content-2-details">
          <div className="landing-content-2-left">
            <div className="landing-content-2-img">
              <img src="https://i.ibb.co/xXtTNRw/Mask-Group-76.png" alt="err" />
            </div>
            <div className="landing-content-2-left-item">
              <h2>MULTIROTOR</h2>
              <span>
                easy to use, quick to deploy, and fully calibrated to suit a
                variety of applications and functions
              </span>
            </div>
          </div>
          <div className="landing-content-2-right">
            <div className="landing-content-2-img">
              <img src="https://i.ibb.co/yPXbW4Q/Mask-Group-20.png" alt="err" />
            </div>
            <div className="landing-content-2-left-item">
              <h2>FIXED WING</h2>
              <span>
                Able to carry various payloads, operate in extreme weather
                conditions and built to perform a broad range of functions.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="landing-content-3">
        <div className="landing-content-3-details">
          <h3>
            SWARM <br />
            SYSTEM
          </h3>
          <img src="https://i.ibb.co/cYPbKDB/Group-9762.png" alt="error" />
        </div>
        <span className="landing-content-3-spantag">
          A Swarm system refers to a fleet of drones flying together in a
          pattern similar to a flock of birds in order to perform coordinated
          tasks and achieve a specific goal. We are developing peer-to-peer
          communication systems that enable multiple drones to communicate with
          each other and operate as a group
        </span>
      </div>
      <div className="landing-content-4">
        <div className="landing-content-4-details">
          <Link to={"/gcs?scroll=" + true}>
            <h3>
              GCS <br />
              SYSTEM
            </h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
