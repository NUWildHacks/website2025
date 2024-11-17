import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import wildhacksLogo from "../../assets/wildhacks-logo-square.svg";
import "./Footer.scss";

interface IFooter {}

export const Footer: React.FC<IFooter> = () => {
  return (
    <div id="footer">
      <div className="footer__flexbox">
        <div className="footer__image">
          <img src={wildhacksLogo} alt="Wildhacks 2025 logo" />
        </div>
        <h2>WildHacks 2025</h2>
      </div>
      <div className="footer__flexbox">Something should go here eventually</div>
      <div>
        <div className="footer__flexbox" id="icons__flexbox">
          <a href="https://www.instagram.com/wildhacks/" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2xl" />
          </a>
          <a
            href="https://www.linkedin.com/company/wildhacks/"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2xl" />
          </a>
          <a href="mailto:wildhacks@northwestern.edu">
            <FontAwesomeIcon icon={faEnvelope} size="2xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
