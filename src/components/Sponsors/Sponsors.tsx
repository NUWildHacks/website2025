import tree from "../../assets/bg/tree.svg"
import nucsLogo from "../../assets/sponsors/nucs.png"
import garageLogo from "../../assets/sponsors/the-garage.png"
import omnistackLogo from "../../assets/sponsors/omnistack.png"
import googleLogo from "../../assets/sponsors/google.png"

import WaveVector from "../WaveVector/WaveVector"
import { colors } from "../../shared/colors.ts"

import "./Sponsors.scss"

interface ISponsors {}

export const Sponsors: React.FC<ISponsors> = () => {
  const TRANSPARENT = "#00000000"
  return (
    <>
      <div className="sponsors__backdrop">
        <div className="sponsors__tree">
          <img src={tree} />
        </div>
        <div id="sponsors__wave">
          <WaveVector
            color={colors.very_dark_green}
            otherColor={TRANSPARENT}
            waviness={0}
          />
        </div>

        <div className="sponsors__inner_wrapper">
          <div className="sponsors__header">Thank You To Our Sponsors</div>
          <div className="sponsors__flexbox">
            <div>
              <img src={nucsLogo} />
            </div>
            <div>
              <img src={omnistackLogo} />
            </div>
            <div>
              <img src={garageLogo} />
            </div>
          </div>
          <div className="sponsors__subheader">and Our Partners</div>
          <div className="sponsors__flexbox">
            <div>
              <img src={googleLogo} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sponsors
