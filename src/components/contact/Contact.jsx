/** @format */
import React from "react";
import "./contact.styles.scss";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-contents">
        <div className="contact-img">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15554.35878126597!2d77.609869!3d12.934072!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6b6ca5b3791dd536!2sLycan%203D!5e0!3m2!1sen!2sin!4v1643371953558!5m2!1sen!2sin"
            title="map"
            allowfullscreen=""
            loading="lazy"></iframe>
        </div>
        <div className="contact-details">
          <h1>CONTACT US</h1>
          <form>
            <div className="contact-form-ip">
              <label>Name</label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter your full name"
              />
            </div>
            <div className="contact-form-ip">
              <label>Email</label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter your Email address"
              />
            </div>
            <div className="contact-form-ip">
              <label>Phone</label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter your Phone Number"
              />
            </div>
            <div className="contact-btn">
              <div className="contact-btn-contents">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="150"
                  height="52"
                  viewBox="0 0 209 62">
                  <path
                    id="Subtraction_7"
                    data-name="Subtraction 7"
                    d="M291.66,151.321H106.16v-30.5l31.5-31.5h177.5v38.5l-23.5,23.5Z"
                    transform="translate(-106.16 -89.32)"
                  />
                </svg>
                <span className="submit-btn-text">SUBMIT</span>
              </div>
            </div>
          </form>
          <div className="contact-user">
            <div>
              <p>EMAIL US</p>
              <span>Contactus@Lyar.io</span>
            </div>
            <div>
              <p>Phone US</p>
              <span>+91 9591807979</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
