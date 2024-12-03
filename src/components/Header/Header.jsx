import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/tailtap-logo.svg"; // Static logo (or first frame of the GIF)
import animatedLogo from "../../assets/images/gif.gif"; // Animated GIF for hover
import skateboardGraphic from "../../assets/images/button.svg";
import Add from "../../assets/images/add.svg";
import "./Header.scss";

export default function Header() {
  const [isHovered, setIsHovered] = useState(false); // Track hover state

  return (
    <header className="header">
      <Link to="/" className="header_link-logo">
        <img
          className="header__logo"
          src={isHovered ? animatedLogo : logo} // Swap between GIF and static logo
          alt="tailtap logo"
          onMouseEnter={() => setIsHovered(true)} // Trigger hover
          onMouseLeave={() => setIsHovered(false)} // Reset hover
        />
      </Link>
      <div className="header__vertical-container">
        <div className="header__text-container">
          <h1 className="header__title">TAILTAP</h1>
          <h3 className="header__caption">SKATE+LEARN+SHARE</h3>
        </div>
        <Link className="header__link" to="/spots">
          <button
            style={{ backgroundImage: `url(${skateboardGraphic})` }}
            className="header__button"
          >
            Spot
            <br />
            Finder!
          </button>
        </Link>
      </div>
      <Link className="header__link--upload" to="/upload">
        <button className="header__button--square">Add A New Spot!</button>
      </Link>
    </header>
  );
}
