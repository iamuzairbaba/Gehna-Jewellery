import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="owner" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Owner's Word" />
      <h1 className="headtext__cormorant">What We Believe In</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            We believe jewellery empowers self-expression, sparks cherished
            memories, and symbolizes endless love.
          </p>
        </div>
        <p className="p__opensans">
          At Gehna Jewellery, we believe that every piece tells a story, every
          sparkle ignites a memory, and every adornment empowers individuality,
          because jewellery is not just a possession, but a symbol of love,
          luxury, and self-expression.
        </p>
      </div>
      <div className="app__chef-sign">
        <p>Liyakat Wali</p>
        <p className="p__opensans">Owner</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
