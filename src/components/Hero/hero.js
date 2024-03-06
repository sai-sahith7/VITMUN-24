import React from "react";
import "./hero.css";

const HeroComponent = () => {
  return (
    <div className="hero-container flex-container-column">
      <img
        className="hero-image flex-item"
        src="/images/vitmun.png"
        alt="hero"
      />
      <div className="hero-button-container flex-container-row">
        <button className="hero-button">Request Invite</button>
        <button className="hero-button register-now-button">
          Register Now
        </button>
      </div>
    </div>
  );
};

export default HeroComponent;
