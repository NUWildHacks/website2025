import React from "react";
import reactLogo from "../../assets/react.svg";
import "./Footer.scss";

interface IFooter {}

export const Footer: React.FC<IFooter> = () => {
  return (
    <div id="footer">
      <div className="footer__flexbox">
        <img src={reactLogo} alt="Placeholder" />
        <h2>WildHacks 2025</h2>
      </div>
      <div className="footer__flexbox">Something should go here eventually</div>
      <div>
        <div className="footer__flexbox">
          <a href="https://www.instagram.com/wildhacks/" rel="noreferrer">
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/company/wildhacks/"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:wildhacks@northwestern.edu">Email</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
