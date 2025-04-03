import tree from "../../assets/bg/tree.svg";
import googleLogo from "../../assets/sponsors/google.png";
import nucsLogo from "../../assets/sponsors/nucs.png";
import omnistackLogo from "../../assets/sponsors/omnistack.png";
import stickersLogo from "../../assets/sponsors/stand-out-stickers.svg";
import redBullLogo from "../../assets/sponsors/redbull.svg";
import balsamiqLogo from "../../assets/sponsors/balsamiq-logo.svg";
import hedgyLogo from "../../assets/sponsors/hedgy-logo.svg";
import garageLogo from "../../assets/sponsors/the-garage.png";
import geicoLogo from "../../assets/sponsors/geico.svg";

import { colors } from "../../shared/colors.ts";
import WaveVector from "../WaveVector/WaveVector";

import "./Sponsors.scss";

interface ISponsor {
  altLabel: string,
  src: string,
  url?: string,
};

const SponsorImage: React.FC<ISponsor> = ({altLabel, src, url}) => {
  return (
    <a href={url}>
      <div>
        <img src={src} alt={altLabel} />
      </div>
    </a>
  );
}

const TRANSPARENT = "#00000000";

export const Sponsors: React.FC = () => {
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
            <SponsorImage altLabel="Northwestern Department of Computer Science" src={nucsLogo} url="https://www.mccormick.northwestern.edu/computer-science/" />
            <SponsorImage altLabel="OmniStack" src={omnistackLogo} />
            <SponsorImage altLabel="The Garage @ Northwestern" src={garageLogo} url="https://www.thegarage.northwestern.edu/" />
            <SponsorImage altLabel="Geico" src={geicoLogo} />
          </div>
          <div className="sponsors__subheader">and Our Partners</div>
          <div className="sponsors__flexbox">
            <SponsorImage altLabel="Google" src={googleLogo} />
            <SponsorImage altLabel="Standout Stickers" src={stickersLogo} url="https://www.standoutstickers.com/?utm_campaign=events-league-organizers-fall2023&utm_medium=email&utm_source=customerio-zoho_creator_-_standout_sticker_intro" />
            {/* hedgy partner, red bull partner, balsamiq partner,  doordash partner */}
            <SponsorImage altLabel="Hedgy" src={hedgyLogo} url="https://www.hedgy.works/" />
            <SponsorImage altLabel="Red Bull" src={redBullLogo} />
            <SponsorImage altLabel="Balsamiq" src={balsamiqLogo} url="https://balsamiq.com/" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sponsors;
