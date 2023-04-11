import React from "react";
import "./Header.css";
import SubHeading from "../../components/SubHeading/SubHeading";
import images from "../../constants/images";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase The New Flavour" />
      <h1 className="app__header-h1">The Key to Fine Dining</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum maxime
        laudantium veniam. Quia perspiciatis quisquam error accusantium ducimus.
      </p>
      <button type="button" className="custom__button">
        Explore more
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="welcome"  />
    </div>
  </div>
);

export default Header;
