/** @format */

import React from "react";
import "./payload.styles.scss";

const Payload = ({ payload }) => {
  return (
    <React.Fragment>
      <div className="payload-container">
        <div className="payload-contents">
          <h2 className="payload-h2">PAYLOAD APPLICATIONS</h2>
          <div className="payload-flex-container">
            {payload.payload_array.map((item) => (
              <div className="payload-item" key={item.payload_item_text}>
                <div className="payload-img">
                  <img src={item.payload_item_img} alt="error" />
                  <p
                    className={
                      item.payload_item_text === "RGB CAMERA"
                        ? "payload-img-ptag payload-img-ptag-rgb"
                        : "payload-img-ptag"
                    }>
                    {item.payload_item_text}
                  </p>
                </div>
                <div className="payload-details">
                  {item.payload_usage.split(":").map((text) => (
                    <p key={text}>{text}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="sheet-container" id="payload">
        <h3 className="sheet-h3">SPEC SHEET</h3>
        <div className="sheet-contents">
          <div className="sheet-table">
            <div className="sheet-spec">
              <p className="sheet-ptag"> Specification</p>
              {payload.spec.map(({ item, value }) => (
                <div className="sheet-spec-item" key={item}>
                  <span>{item}</span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
            <div className="sheet-table-right">
              <div className="sheet-table-design">
                <p className="sheet-ptag">Design</p>
                {payload.spec_design.map(({ item, value }) => (
                  <div className="sheet-design-item" key={item}>
                    <span>{item}</span>
                    <span>{value}</span>
                  </div>
                ))}
              </div>
              <div className="sheet-table-payload">
                <p className="sheet-ptag">Payload options</p>{" "}
                {payload.spec_payload.map(({ item, value }) => (
                  <div className="sheet-payload-item" key={item}>
                    <span>{item}</span>
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="sheet-img">
            <img src={payload.img} alt="error" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Payload;
