import React from "react";
import "./hero.css";

const HeroComponent = (props) => {
  return (
    <div className="hero-container flex-container-column">
      <img
        className="hero-image flex-item"
        src="/images/vitmun.png"
        alt="hero"
      />
      <div className="hero-button-container flex-container-row">
        <button className="hero-button">DELEGATION REGISTRATION</button>
        <button
          onClick={props.toggleShowPopup}
          className="hero-button register-now-button"
        >
          INDIVIDUAL REGISTRATION
        </button>
      </div>
      <img
        className="hero-monuments-image flex-item"
        src="/images/monuments.png"
        alt="Monuments"
      ></img>
      <img
        className="hero-flower-image left-flower flex-item"
        src="/images/flower.png"
        alt="Flower"
      />
      <img
        className="hero-flower-image right-flower flex-item"
        src="/images/flower.png"
        alt="Flower"
      />
    </div>
  );
};

export default HeroComponent;
