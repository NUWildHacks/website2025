import React from "react";
import "./Header.scss";

interface IHeader {}

export const Header: React.FC<IHeader> = () => {
  return (
    <div className="header__box">
      <div className="header__nav">
        <button className="header__button">About</button>
        <button className="header__button">FAQ</button>
        <button className="header__button">Sponsors</button>
        <button className="header__d_button">Dashboard</button>
      </div>
    </div>
  );
};

export default Header;
