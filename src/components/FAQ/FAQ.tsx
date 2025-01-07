import QuestionList from "./QuestionList/QuestionList";
import QUESTION_LIST from "../../shared/questions";

import "./FAQ.scss";
import { useOs } from "@mantine/hooks";

interface IFAQ {}

export const FAQ: React.FC<IFAQ> = () => {
  const os = useOs();

  // on mobile, no tree or buttons; no space.
  if (os === "ios" || os === "android") {
    return (
      <div style={{ display: "block" }}>
        <div className="faq__wrapper">
          <div className="faq__right_side">
            <div className="faq__header">Frequently Asked Questions</div>
            {QUESTION_LIST.map((elem, index) => (
              <QuestionList
                header={elem.header}
                questions={elem.questions}
                key={`questionlist__${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // on non-mobile, add buttons to switch category
  return (
    <div>
      <div className="faq__wrapper">
        <div className="faq__right_side">
          <div className="faq__header">Frequently Asked Questions</div>
          {QUESTION_LIST.map((elem, index) => (
            <QuestionList
              header={elem.header}
              questions={elem.questions}
              key={`questionlist__${index}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
