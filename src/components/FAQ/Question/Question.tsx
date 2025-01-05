import React, { ReactNode, useState } from "react";

import flowerOne from "../../../assets/flower-1.svg";
import flowerTwo from "../../../assets/flower-2.svg";
import flowerThree from "../../../assets/flower-3.svg";

import "./Question.scss";

export interface IQuestion {
  question: string;
  answer: string | ReactNode;
}

const getRandomFlower = () => {
  let flowers = [flowerOne, flowerTwo, flowerThree];
  let index = Math.round(Math.random() * 2);
  console.log(index);
  return flowers[index];
};

export const Question: React.FC<IQuestion> = ({ question, answer }) => {
  const [active, setActive] = useState(false);
  return (
    <div className="q">
      <div
        onClick={() => {
          setActive(!active);
        }}
        className={`q__question_text ${active && "q__question_text__active"}`}
      >
        <img src={getRandomFlower()} alt="A flower" />
        {question}
      </div>

      <div
        className={`q__container_bar ${active && "q__container_bar__active"}`}
      />
      {active && <div className="q__answer_text">{answer}</div>}
    </div>
  );
};

export default Question;
