import "./Sponsors.scss";

interface ISponsors {}

export const Sponsors: React.FC<ISponsors> = () => {
  return (
    <>
      <div className="sponsors__backdrop">
        <div className="sponsors__inner_wrapper">
          <div className="sponsors__header">Thank You To Our Sponsors</div>

          <div className="sponsors__subheader">and Our Partners</div>
        </div>
      </div>
      {/* <div className="bottom_border" /> */}
    </>
  );
};

export default Sponsors;
