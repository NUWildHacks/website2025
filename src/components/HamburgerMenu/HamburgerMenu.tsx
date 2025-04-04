import { useState } from "react";
import { useViewportSize } from "@mantine/hooks";

import "./HamburgerMenu.scss";
import { AnimatePresence } from "motion/react";

interface IHamburgerMenu {
  children: React.ReactNode;
}

export const HamburgerMenu: React.FC<IHamburgerMenu> = ({ children }) => {
  const [active, setActive] = useState(false);

  const { width } = useViewportSize();
  let mobile = width < 800;

  return (
    <div className="hamburger__main_wrapper">
      {mobile && (
        <div
          onClick={() => {
            setActive(!active);
          }}
          className={`hamburger_menu${active ? " hamburger_menu__active" : ""}`}
        >
          <div className="hamburger_menu__bun"></div>
          <div className="hamburger_menu__meat"></div>
          <div className="hamburger_menu__bun"></div>
        </div>
      )}
      <AnimatePresence initial={false}>
        {(active || !mobile) && children}
      </AnimatePresence>
    </div>
  );
};

export default HamburgerMenu;
