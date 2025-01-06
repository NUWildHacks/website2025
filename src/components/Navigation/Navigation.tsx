import { useWindowScroll } from "@mantine/hooks";

import wildhacksLogo from "../../assets/logo-no-padding.svg";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import NavigationMotionDiv from "./NavigationMotionDiv";

import "./Navigation.scss";

interface INavigation {}

// 2(1 - (1/(1 + exp(-posn))))
const getOpacityFromScroll = (posn: number): number => {
  return 2 - 2 / (1 + Math.exp(-1 * posn));
};

export const Navigation: React.FC<INavigation> = () => {
  const [scroll, _scrollTo] = useWindowScroll();

  const SCROLL_SPEED = 540; // arbitrary; higher is slower
  const opacityState = scroll.y / SCROLL_SPEED;
  const opacityValue = getOpacityFromScroll(opacityState);

  return (
    <div
      id="navigation__main_wrapper"
      style={{ backgroundColor: `rgb(175, 213, 240, ${opacityValue})` }}
    >
      <div className="navigation__logo_wrapper">
        <a href="/#landing">
          <img src={wildhacksLogo} alt="Wildhacks 2025 logo" />
        </a>
      </div>

      <HamburgerMenu>
        <div className="navigation__bar_wrapper">
          <NavigationMotionDiv>
            <button className="button-A">
              <div className="button__inner_div">
                <div className="button__bar"></div>
                Dashboard
                <div className="button__bar"></div>
              </div>
            </button>
          </NavigationMotionDiv>

          <NavigationMotionDiv>
            <a href="/#faq">
              <button className="button-B">FAQ</button>
            </a>
          </NavigationMotionDiv>

          <NavigationMotionDiv>
            <a href="/#sponsors">
              <button className="button-B">Sponsors</button>
            </a>
          </NavigationMotionDiv>

          <NavigationMotionDiv>
            <a href="/#about">
              <button className="button-B">About</button>
            </a>
          </NavigationMotionDiv>
        </div>
      </HamburgerMenu>
    </div>
  );
};

export default Navigation;
