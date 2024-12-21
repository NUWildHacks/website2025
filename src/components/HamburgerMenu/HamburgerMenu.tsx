import React, { useEffect, useState } from "react";
import "./HamburgerMenu.scss";

interface IHamburgerMenu {
  children: React.ReactNode;
}

export const HamburgerMenu: React.FC<IHamburgerMenu> = ({children}) => {
  const [active, setActive] = useState(false);
  
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const getWidth = () => {
      setMobile(window.outerWidth < 800);
    };

    window.addEventListener("resize", getWidth);

    return () => {
      window.removeEventListener("resize", getWidth);
    };
  }, []);

  return <div className="hamburger__main_wrapper">
    {mobile && <div onClick={() => {
      setActive(!active);
    }} className={`hamburger_menu${active ? " hamburger_menu__active" : ""}`}>
      <div className="hamburger_menu__bun"></div>
      <div className="hamburger_menu__meat"></div>
      <div className="hamburger_menu__bun"></div>
    </div>}
    {(active || !mobile) && children}
  </div>;
};

export default HamburgerMenu;
