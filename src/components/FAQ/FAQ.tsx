import React from "react";
import "./FAQ.scss";
import QuestionList from "./QuestionList/QuestionList";
import QUESTION_LIST from "../../shared/questions";

interface IFAQ {}

export const FAQ: React.FC<IFAQ> = () => {
  return <div className="faq__wrapper">

    <div className="faq__header">
      Frequently Asked Questions
    </div>

    {QUESTION_LIST.map((elem, index) => (
      <QuestionList header={elem.header} questions={elem.questions} key={`questionlist__${index}`} />
    ))}

  </div>;
};

export default FAQ;
