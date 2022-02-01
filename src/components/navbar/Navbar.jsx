/** @format */

import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./nav.styles.scss";
import Navdots from "./Navdots";

const Navbar = () => {
  const [areialState, setAreialState] = useState(false);
  const [areialState2, setAreialState2] = useState(false);

  const [menuState, setmenuState] = useState(false);

  const navRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      document.addEventListener("click", (e) => {
        if (navRef.current.contains(e.target)) {
          return;
        } else {
          setAreialState2(false);
          setAreialState(false);
        }
      });
    }, 1200);
  }, []);

  return (
    <div ref={navRef} className="navbar-container">
      <div className="nav-contents">
        <svg
          id="Component_47_14"
          data-name="Component 47 – 14"
          xmlns="http://www.w3.org/2000/svg"
          width="751.454"
          height="74.31"
          viewBox="0 0 751.454 74.31">
          <g
            id="Union_9"
            data-name="Union 9"
            transform="translate(-0.009)"
            fill="#fff">
            <path
              d="M 685.6618041992188 73.81034851074219 L 65.81121063232422 73.81034851074219 L 65.81121063232422 73.44605255126953 L 65.31121063232422 73.44605255126953 C 63.79651260375977 73.44605255126953 62.3855094909668 72.84335327148438 61.3380126953125 71.74884796142578 L 2.047811269760132 9.802651405334473 C 0.499011218547821 8.184451103210449 0.08351123332977295 5.899551391601562 0.9633112549781799 3.839551448822021 C 1.843111276626587 1.779651403427124 3.781111240386963 0.5000513792037964 6.021011352539062 0.5000513792037964 L 124.6014099121094 0.5000513792037964 L 626.87158203125 0.5000513792037964 L 745.4511108398438 0.5000513792037964 C 747.6915893554688 0.5000513792037964 749.6298828125 1.779851317405701 750.5095825195312 3.839851379394531 C 751.3892822265625 5.89975118637085 750.973388671875 8.184451103210449 749.42431640625 9.80255126953125 L 690.135009765625 71.74884796142578 C 689.0875244140625 72.84335327148438 687.676513671875 73.44605255126953 686.1618041992188 73.44605255126953 L 685.6618041992188 73.44605255126953 L 685.6618041992188 73.81034851074219 Z"
              stroke="none"
            />
            <path
              d="M 685.1618041992188 73.31034851074219 L 685.1618041992188 72.94605255126953 L 686.1618041992188 72.94605255126953 C 687.538818359375 72.94605255126953 688.821533203125 72.39804840087891 689.7738037109375 71.40315246582031 L 749.063232421875 9.456851005554199 C 750.471435546875 7.985851287841797 750.8494873046875 5.908751487731934 750.0498046875 4.036251544952393 C 749.2501220703125 2.163451433181763 747.4879150390625 1.000051379203796 745.4511108398438 1.000051379203796 L 6.021011352539062 1.000051379203796 C 3.984711170196533 1.000051379203796 2.22291111946106 2.16335129737854 1.423111200332642 4.035951137542725 C 0.6233112215995789 5.908651351928711 1.001011252403259 7.985851287841797 2.409011125564575 9.456951141357422 L 61.69921112060547 71.40315246582031 C 62.65151214599609 72.39804840087891 63.93421173095703 72.94605255126953 65.31121063232422 72.94605255126953 L 66.31121063232422 72.94605255126953 L 66.31121063232422 73.31034851074219 L 685.1618041992188 73.31034851074219 M 686.1618041992188 74.31034851074219 L 65.31121063232422 74.31034851074219 L 65.31121063232422 73.94605255126953 C 63.73461151123047 73.94605255126953 62.15811157226562 73.32884979248047 60.97681045532227 72.09455108642578 L 1.686611175537109 10.14835166931152 C -1.965588808059692 6.332451343536377 0.7389112114906311 5.136718755238689e-05 6.021011352539062 5.136718755238689e-05 L 745.4511108398438 5.136718755238689e-05 C 750.734130859375 5.136718755238689e-05 753.4385986328125 6.332451343536377 749.7855224609375 10.14835166931152 L 690.4962158203125 72.09455108642578 C 689.31494140625 73.32884979248047 687.7384033203125 73.94605255126953 686.1618041992188 73.94605255126953 L 686.1618041992188 74.31034851074219 Z"
              stroke="none"
              fill="#1e4384"
            />
          </g>
        </svg>
        <div className="nav-abs">
          <div
            className="nav-ptag"
            onClick={() => {
              setAreialState2(false);
              setAreialState(!areialState);
            }}>
            <p> AERIAL SYSTEMS</p>

            <div
              className={
                areialState
                  ? "nav-aerial-contents nav-areial-active"
                  : "nav-aerial-contents"
              }>
              <Link className="nav-atag" to={"/product/menu?areial=" + true}>
                <span>Muticolor</span>
              </Link>
              <Link className="nav-atag" to={"/product/menu?areial=" + false}>
                <span>Fixed Wing</span>
              </Link>
            </div>
          </div>
          <div className="brand-logo">
            <img
              src="https://i.ibb.co/2yQd05M/Group-1.webp"
              alt="logo"
              className="nav-logo"
            />
          </div>
          <div
            className="nav-ptag"
            onClick={() => {
              setAreialState(false);
              setAreialState2(!areialState2);
            }}>
            <p> COMMUNICATION</p>
            <div
              className={
                areialState2
                  ? "nav-aerial-contents nav-areial-active"
                  : "nav-aerial-contents"
              }>
              <Link className="nav-atag" to="/gcs">
                <span>GCS</span>
              </Link>
              <Link className="nav-atag" to="/swarm">
                <span>SWARM</span>
              </Link>
            </div>
          </div>
          <div className="nav-dots" onClick={() => setmenuState(!menuState)}>
            <img src="https://i.ibb.co/kStnLBz/Group-9875.png" alt="dots" />
          </div>
        </div>
      </div>
      <Navdots menuState={menuState} setmenuState={setmenuState} />
    </div>
  );
};

export default Navbar;
