import "./PhotoBar.scss";
import { IPerson } from "./People";
import People from "./People";

interface IPhotoBar {}

export const PhotoBar: React.FC<IPhotoBar> = () => {
  const secondsPerPerson = 8;
  return (
    <div id="photobar">
      <div className="photobar__heading1">Wildhacks Organizers</div>
      <div
        className="photobar__animation"
        style={{
          animationDuration: `${(People.length * secondsPerPerson).toString()}s`,
        }}
      >
        {People.map((person: IPerson, i) => (
          <a
            href={person.link ? person.link : "javascript:void(0);"}
            rel="noreferrer"
          >
            <div
              key={i}
              className={`photobar__flexbox ${i % 2 === 0 ? "photobar__rotate_right" : "photobar__rotate_left"}`}
            >
              <div className="photobar__image">
                <img className="photo" src={person.img} />
              </div>
              <h3>{person.name}</h3>
              <p>{person.position}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default PhotoBar;
