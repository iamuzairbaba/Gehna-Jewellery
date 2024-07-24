import React from "react";
import { FooterOverlay, Newsletter } from "../../components";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import "./Footer.css";
import { images } from "../../constants";

const Footer = () => (
  <div className="app__footer section__padding">
    {/* <FooterOverlay /> */}
    <Newsletter />
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Residency Road, Srinagar</p>
        <p className="p__opensans">+91 70069 16629</p>
        <p className="p__opensans">Saraf Kadal, Srinagar</p>
        <p className="p__opensans"> +91 9596666662</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gehna} alt="logo" />
        <p className="p__opensans">Wear your story, with Gehnaa</p>
        <img
          src={images.spoon}
          alt="spoon"
          className="spoon__image"
          style={{ marginTop: "15px" }}
        />
        <div className="app__footer-links_icons">
          <a href="https://www.facebook.com/Hari.Singh.High.Street" target="_blank" rel="noreferrer">
            <FiFacebook />
          </a>
          <a href="https://www.instagram.com/gehna.the.jewellery/" target="_blank" rel="noreferrer">
            <FiInstagram />
          </a>
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Mon - Sat</p>
        <p className="p__opensans">10:00 am - 07:00 pm</p>
        <p className="p__opensans">Sunday</p>
        <p className="p__opensans">Closed</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2023 Gehna. All Rights Reserved</p>
    </div>
  </div>
);

export default Footer;
