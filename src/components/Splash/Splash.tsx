import React from "react";
import "./Splash.scss";
import wildhacksLogo from "../../assets/website-logo.svg";

interface IHeader {}

export const Splash: React.FC<IHeader> = () => {
  return <div className="header__box">

    <div id="header__logo_container">
      <img src={wildhacksLogo} alt="Wildhacks 2025 logo" />
    </div>

  </div>;
};

export default Splash;
