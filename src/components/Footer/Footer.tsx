import React from "react";
import reactLogo from "../../assets/react.svg";
import "./Footer.scss";

interface IFooter {}

export const Footer: React.FC<IFooter> = () => {
  return (<div id="footer">
    <img src={ reactLogo } alt="Placeholder" />
    <h2>WildHacks 2025</h2>
    <div id="footer-socials">
      <a href="https://www.instagram.com/wildhacks/">Instagram</a>
      <a href="https://www.linkedin.com/company/wildhacks/">LinkedIn</a>
      <a href="mailto:wildhacks@northwestern.edu">Email</a>
    </div>
  </div>);
};

export default Footer;
