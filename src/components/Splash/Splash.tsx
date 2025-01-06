import wildhacksLogo from "../../assets/website-logo.svg";

import cloudOne from "../../assets/bg/cloud_a.svg";
import cloudTwo from "../../assets/bg/cloud_b.svg";
import balloon from "../../assets/bg/balloon.svg";

import "./Splash.scss";

interface ISplash {}

export const Splash: React.FC<ISplash> = () => {
  return (
    <div className="header__box">
      <div id="header__logo_container">
        <img id="cloud" src={cloudOne} alt="A cloud" />
        <img src={wildhacksLogo} alt="Wildhacks 2025 logo" />
        <img id="cloud" src={cloudTwo} alt="A cloud" />
      </div>

      <div id="header__backdrop">
        <div id="header__balloon_container">
          <img src={balloon} alt="A cloud" />
        </div>
        <div id="header__clouds_container">
          <img src={cloudOne} alt="A cloud" />
          <img src={cloudTwo} alt="A cloud" />
        </div>
      </div>
    </div>
  );
};

export default Splash;
