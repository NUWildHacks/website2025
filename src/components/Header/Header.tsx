import React from "react";
import "./Header.scss";

interface IHeader {

};

export const Header: React.FC<IHeader> = () => {
  return <div className="header__box">some words</div>;
};

export default Header;
