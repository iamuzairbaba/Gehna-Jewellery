import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);



  return (
    <nav className="app__navbar">
    <div className="app__navbar-logo">
      <img src={images.gehna} alt="logo" />
    </div>
    <ul className="app__navbar-links">
      <li className="p__opensans">
        <a href="#home">Home</a>
      </li>
      <li className="p__opensans">
        <a href="#about">About</a>
      </li>
      <li className="p__opensans">
        <a href="#collection">Collection</a>
      </li>
      <li className="p__opensans">
        <a href="#awards">Laurels</a>
      </li>
      <li className="p__opensans">
        <a href="#contact">Contact</a>
      </li>
    </ul>
    <div className="app__navbar-login">
      <a href="https://www.facebook.com/Hari.Singh.High.Street" className="p__opensans">
        View Socials
      </a>
      <div></div>
      <a href="/" className="p__opensans">
        Book a visit
      </a>
    </div>
    <div className="app__navbar-smallscreen">
      <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => { setToggleMenu(true)}} />
      {toggleMenu && <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
        <MdOutlineRestaurantMenu
          fontSize={27}
          className="overlay__close"
          onClick={() => {setToggleMenu(false)}}
        />
        <ul className="app__navbar-smallscreen_links">
          <li className="p__opensans">
            <a href="#home" onClick={() => setToggleMenu(false)}>Home</a>
          </li>
          <li className="p__opensans">
            <a href="#about" onClick={() => setToggleMenu(false)}>About</a>
          </li>
          <li className="p__opensans">
            <a href="#collection" onClick={() => setToggleMenu(false)}>Collection</a>
          </li>
          <li className="p__opensans">
            <a href="#awards" onClick={() => setToggleMenu(false)}>Laurels</a>
          </li>
          <li className="p__opensans">
            <a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a>
          </li>
        </ul>
      </div>}
    </div>
  </nav>
  )
}

export default Navbar;
