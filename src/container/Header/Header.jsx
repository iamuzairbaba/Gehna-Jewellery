import React from "react";
import { images } from "../../constants";
import "./Header.css";
import SubHeading from "../../components/SubHeading/SubHeading";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Jewels that speak to your soul" />
      <h1 className="app__header-h1">Gehna: Where love meets luxury</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}></p>
      <button
        onClick={() => window.open("https://www.instagram.com/gehna.the.jewellery/")}
        type="button"
        className="custom__button"
      >
        Explore Collection
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="welcome" />
    </div>
  </div>
);

export default Header;
