import wildhacksLogo from "../../assets/website-logo.svg";

import "./Splash.scss";

interface ISplash {}

export const Splash: React.FC<ISplash> = () => {
  return (
    <div className="header__box">
      <div id="header__logo_container">
        <img src={wildhacksLogo} alt="Wildhacks 2025 logo" />
      </div>
    </div>
  );
};

export default Splash;
