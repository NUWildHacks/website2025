import React, { useEffect, useState } from "react";
import "./Navigation.scss";

import wildhacksLogo from "../../assets/logo-no-padding.svg";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

interface INavigation {}

// 2(1 - (1/(1 + exp(-posn))))
const getOpacityFromScroll = (posn: number): number => {
  return 2 - (2 / (1 + Math.exp(-1 * posn)));
}

export const Navigation: React.FC<INavigation> = () => {
  const [opacityState, setOpacityState] = useState(1);

  useEffect(() => {
    const updateScrollPosition = () => {
      let newOpacityState = getOpacityFromScroll(window.scrollY / 540);
      setOpacityState(newOpacityState);
    };

    window.addEventListener("scroll", updateScrollPosition);

    return () => {
      window.removeEventListener("scroll", updateScrollPosition);
    };
  }, []);

  return <div id="navigation__main_wrapper" style={{backgroundColor: `rgb(175, 213, 240, ${opacityState})`}}>

    <div className="navigation__logo_wrapper">
      <a href="/#landing">
        <img src={wildhacksLogo} alt="Wildhacks 2025 logo" />
      </a>
    </div>

    <HamburgerMenu>
      <div className="navigation__bar_wrapper">
        <button className="button-A">
          <div className="button__inner_div">
            <div className="button__bar"></div>
            Dashboard
            <div className="button__bar"></div>
          </div>
        </button>

        <a href="/#faq">
          <button className="button-B">FAQ</button>
        </a>

        <a href="/#sponsors">
          <button className="button-B">Sponsors</button>
        </a>

        <a href="/#about">
          <button className="button-B">About</button>
        </a>
      </div>
    </HamburgerMenu>

  </div>;
};

export default Navigation;
