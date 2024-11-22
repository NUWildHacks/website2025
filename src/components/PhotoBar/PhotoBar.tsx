import "./PhotoBar.scss";

interface IPhotoBar {}

export const PhotoBar: React.FC<IPhotoBar> = () => {
  return (
    <div id="photobar">
      <div className="photobar__animation">
        {[...Array(50)].map((_, i) => (
          <div key={i} className="photobar__flexbox">
            <div className="photobar__image">
              <img
                className="photo"
                src="https://brandenghena.com/images/branden_crossed.jpg"
              />
            </div>
            <p>Branden Ghena</p>
            <p>Professor</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoBar;
