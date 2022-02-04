/** @format */

import React, { useEffect } from "react";
import Features from "../components/Individual/Features/Features";
import PageCenter from "../components/Individual/PageCenter/PageCenter";
import PageHeader from "../components/Individual/PageHeader/PageHeader";
import Payload from "../components/Individual/Payload/Payload";
import Application from "../components/Individual/Application/Application";
import ApplicationAdv from "../components/Individual/Application/ApplicationAdv";
import DroneVideo from "../components/Individual/Video/DroneVideo";
import { individualDrones } from "../components/Individual/IndividualDrones";
import { useParams } from "react-router-dom";
import Drones from "../components/Individual/Drones/Drones";

const MicroDrone = () => {
  const { id } = useParams();
  const num = parseInt(id);

  const droneDetails = individualDrones[num ? num - 1 : 0];

  return (
    <div>
      <PageHeader
        pageHeader={{
          img: droneDetails?.pageheaderImg,
          text: droneDetails?.pageheaderText,
          svg: droneDetails?.pageheadersvgdrone,
          name: droneDetails?.droneName,
        }}
      />
      <Application
        app={{
          app_img: droneDetails?.application_Img,
          app_array: droneDetails?.applications,
        }}
      />
      <PageCenter
        pageCenter={{
          img: droneDetails?.pagecenterImg,
          text: droneDetails?.pagecentertext,
          bg: droneDetails?.pagecenterBg,
        }}
      />
      {droneDetails.droneName === "AERAS" && (
        <Drones drone={droneDetails?.aerasDrones} />
      )}

      <ApplicationAdv
        appAdv={{
          img: droneDetails?.sectorImg,
        }}
      />

      <DroneVideo url={droneDetails?.videoUrl} />
      <Features
        features={{
          img: droneDetails?.feature_Img,
          array: droneDetails?.features,
        }}
      />
      <Payload
        payload={{
          payload_array: droneDetails?.payload,
          spec_payload: droneDetails?.spec_payloads,
          spec_design: droneDetails?.spec_design,
          spec: droneDetails?.specifications,
          img: droneDetails?.footerimg,
        }}
      />
    </div>
  );
};

export default MicroDrone;
