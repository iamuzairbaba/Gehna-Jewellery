import React from "react";
import { images } from "../../constants";

import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g letter" />
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant"> About Us</h1>
        <img src={images.spoon} alt="spoon" className="spoon__img" />
        <p className="p__opensans">
          Our fashionble outlook on creativity & design results in jewellery
          that is dynamic & vibrant. Customisable orders in gold and gemstone
          jewellery are welcomed. Expertise in gemstone jewellery.
        </p>
        <button onClick={() => window.open("https://www.instagram.com/gehna.the.jewellery/")} type="button" className="custom__button">
          Know More
        </button>
      </div>

      <div className="app__aboutus-content_jewel">
        <img src={images.jewel} alt="jewel" />
      </div>
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="spoon" className="spoon__img" />
        <p className="p__opensans">
          Gehnaa Jewellery's story began in 2005 with a passion for sparkling
          gemstones.With a commitment to quality and craftsmanship,
          Gehnaa inspires confidence, elegance, and joy, making every piece a
          treasured  possession.
        </p>
        <button onClick={() => window.open("https://www.facebook.com/Hari.Singh.High.Street")} type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
