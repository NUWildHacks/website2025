import wildhacksLogo from "../../assets/website-logo.svg";

import cloudOne from "../../assets/bg/cloud_a.svg";
import cloudTwo from "../../assets/bg/cloud_b.svg";
import balloon from "../../assets/bg/balloon.svg";

import "./Splash.scss";
import { motion } from "motion/react";

interface ISplash {}

export const Splash: React.FC<ISplash> = () => {
  return (
    <div className="header__box">
      <motion.div
        id="header__logo_container"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.6,
          delay: 0.8,
          scale: { type: "spring", visualDuration: 0.3, bounce: 0.8 },
        }}
      >
        <img id="cloud" src={cloudOne} alt="A cloud" />
        <img src={wildhacksLogo} alt="Wildhacks 2025 logo" />
        <img id="cloud" src={cloudTwo} alt="A cloud" />
      </motion.div>

      <motion.div
        id="header__backdrop"
        initial={{ opacity: 0.4, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.6 },
        }}
      >
        <motion.div
          id="header__balloon_container"
          initial={{ transform: "translateX(0px)" }}
          animate={{ transform: `translateX(-1000px)`, visibility: "hidden" }}
          transition={{
            duration: 3,
            delay: 0.1,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.6 },
            ease: "easeOut",
          }}
        >
          <img src={balloon} alt="A cloud" />
        </motion.div>
        <motion.div
          id="header__clouds_container"
          initial={{ transform: "translateX(0px)" }}
          animate={{ transform: `translateX(800px)`, visibility: "hidden" }}
          transition={{
            duration: 4,
            delay: 0.12,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.6 },
            ease: "easeOut",
          }}
        >
          <div style={{ transform: "translateX(25px)" }}>
            <img src={cloudOne} alt="A cloud" />
          </div>
          <div>
            <img src={cloudTwo} alt="A cloud" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Splash;
