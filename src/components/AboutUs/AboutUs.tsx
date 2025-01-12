import { Carousel } from "@mantine/carousel";

import picture_1 from "../../assets/pictures/picture_1.jpg";
import picture_2 from "../../assets/pictures/picture_2.jpg";
import picture_3 from "../../assets/pictures/picture_3.jpg";
import picture_4 from "../../assets/pictures/picture_4.jpg";
import picture_5 from "../../assets/pictures/picture_5.jpg";
import picture_6 from "../../assets/pictures/picture_6.jpg";
import picture_7 from "../../assets/pictures/picture_7.jpg";
import picture_8 from "../../assets/pictures/picture_8.jpg";
import picture_9 from "../../assets/pictures/picture_9.jpg";
import picture_10 from "../../assets/pictures/picture_10.jpg";
import picture_11 from "../../assets/pictures/picture_11.jpg";
import picture_12 from "../../assets/pictures/picture_12.jpg";
import picture_13 from "../../assets/pictures/picture_13.jpg";
import picture_14 from "../../assets/pictures/picture_14.jpg";
import picture_15 from "../../assets/pictures/picture_15.jpg";
import picture_16 from "../../assets/pictures/picture_16.jpg";
import picture_17 from "../../assets/pictures/picture_17.jpg";
import picture_18 from "../../assets/pictures/picture_18.jpg";
import picture_19 from "../../assets/pictures/picture_19.jpg";
import picture_20 from "../../assets/pictures/picture_20.jpg";
import picture_21 from "../../assets/pictures/picture_21.jpg";
import picture_22 from "../../assets/pictures/picture_22.jpg";
import picture_23 from "../../assets/pictures/picture_23.jpg";
import picture_24 from "../../assets/pictures/picture_24.jpg";
import picture_25 from "../../assets/pictures/picture_25.jpg";
import picture_26 from "../../assets/pictures/picture_26.jpg";
import picture_27 from "../../assets/pictures/picture_27.jpg";
import picture_28 from "../../assets/pictures/picture_28.jpg";
import picture_29 from "../../assets/pictures/picture_29.jpg";
import picture_30 from "../../assets/pictures/picture_30.jpg";
import picture_31 from "../../assets/pictures/picture_31.jpg";
import picture_32 from "../../assets/pictures/picture_32.jpg";
import picture_33 from "../../assets/pictures/picture_33.jpg";
import picture_34 from "../../assets/pictures/picture_34.jpg";
import picture_35 from "../../assets/pictures/picture_35.jpg";
import picture_36 from "../../assets/pictures/picture_36.jpg";

import "./AboutUs.scss";

interface IAboutUs {}

export const AboutUs: React.FC<IAboutUs> = () => {
  let pictures = [
    picture_1,
    picture_2,
    picture_3,
    picture_4,
    picture_5,
    picture_6,
    picture_7,
    picture_8,
    picture_9,
    picture_10,
    picture_11,
    picture_12,
    picture_13,
    picture_14,
    picture_15,
    picture_16,
    picture_17,
    picture_18,
    picture_19,
    picture_20,
    picture_21,
    picture_22,
    picture_23,
    picture_24,
    picture_25,
    picture_26,
    picture_27,
    picture_28,
    picture_29,
    picture_30,
    picture_31,
    picture_32,
    picture_33,
    picture_34,
    picture_35,
    picture_36,
  ];
  return (
    <div className="about_us__wrapper">
      <div className="about_us__header">About Us</div>
      <div className="about_us__body">
        WildHacks is Northwestern's overnight hackathon taking place in-person
        April 5-7 2024. As Northwestern's largest hackathon, WildHacks is an
        opportunity for students to learn programming skills and develop a final
        project in a collaborative and inclusive environment. Through workshops,
        mentorship, and prizes, WildHacks aims to be an inclusive event that
        welcomes students of all skill levels, majors, and backgrounds.
      </div>
      <Carousel
        slideSize="70%"
        height="100%"
        slideGap="lg"
        controlSize={18}
        loop
        dragFree
        withControls={false}
        withIndicators
      >
        {pictures
          .sort((_a, _b) => Math.random() - 0.5)
          .map((elem) => (
            <Carousel.Slide>
              <div style={{ padding: "1rem" }}>
                <img src={elem} width="100%" />
              </div>
            </Carousel.Slide>
          ))}
      </Carousel>
    </div>
  );
};

export default AboutUs;
