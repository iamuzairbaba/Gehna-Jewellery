import React from "react";
import { images, data } from "../../constants";

import { SubHeading } from "../../components";

import "./Laurels.css";

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__laurels-awards_card" id="awards">
    <img src={imgUrl} alt="award" />
    <div className="app__laurels-awards_card-content">
      <p className="p__cormorant" style={{ color: "#dcca87" }}>
        {title}
      </p>
      <p className="p__cormorant">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper-info">
      <SubHeading title="Awards and Recognition" />
      <h1 className="headtext__cormorant">Our Laurels</h1>
      <div className="app__laurels-awards">
        {data.awards.map((award) => (
          <AwardCard award={award} key={award.title} />
        ))}
      </div>
    </div>
    <div className="app__wrapper-img">
      <img src={images.laurels} alt="laurelss" />
    </div>
  </div>
);

export default Laurels;
