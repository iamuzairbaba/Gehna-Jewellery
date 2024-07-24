import React from "react";

import { images } from "../../constants";

import { SubHeading } from "../../components";
import "./FindUs.css";

const FindUs = () => (
  <div className="app__bg section__padding app__findus" id="contact">
    <div className="app__wrapper-info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        {" "}
        Find Us
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">
          Residency Road, LalChowk, Srinagar, Jammu & Kashmir, 190001
        </p>
        <p className="p__opensans">
          Saraf Kadal, Srinagar, Jammu & Kashmir, 190013
        </p>
        <p
          className="p__cormorant"
          style={{ color: "#dcca87", margin: "2rem 0" }}
        >
          Opening Hours
        </p>
        <p className="p__opensans">Mon - Sat: 10:00 AM - 07:00 PM</p>
        <button
          type="button"
          className="custom__button"
          style={{ marginTop: "2rem" }}
          onClick={() =>
            window.open(
              "https://www.google.com/maps/place/Gehna+Jewellers+H.s.h.st/@34.0695325,74.7955684,15z/data=!3m1!4b1!4m6!3m5!1s0x38e18f9499cb837f:0xefe8bc315a19acc6!8m2!3d34.0695329!4d74.8058681!16s%2Fg%2F11f400gc30?entry=ttu",
              "_blank"
            )
          }
        >
          Visit Us
        </button>
      </div>
    </div>
    <div className="app__wrapper-img">
      <img src={images.findus} alt="findus" />
    </div>
  </div>
);

export default FindUs;
