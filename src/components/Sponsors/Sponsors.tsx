import tree from "../../assets/bg/tree.svg";
import nucsLogo from "../../assets/sponsors/nucs.png";
import garageLogo from "../../assets/sponsors/the-garage.png";
import omnistackLogo from "../../assets/sponsors/omnistack.png";
import googleLogo from "../../assets/sponsors/google.png";

import "./Sponsors.scss";

interface ISponsors {}

export const Sponsors: React.FC<ISponsors> = () => {
  return (
    <>
      <div className="sponsors__backdrop">
        <div className="sponsors__tree">
          <img src={tree} />
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
      {/* <div className="bottom_border" /> */}
    </>
  );
};

export default Sponsors;
