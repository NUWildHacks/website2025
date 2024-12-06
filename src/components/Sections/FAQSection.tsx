import React from "react";
import gsap from "gsap";
import "./FAQSection.scss";

interface IFAQSection { }


export const FAQSection: React.FC<IFAQSection> = () => {
  const questions = [
    {
      question: "Lorem ipsum dolor sit amet?",
      answer: "Lorem ipsum odor amet, consectetuer adipiscing elit. Blandit venenatis nibh mus accumsan purus egestas felis.",
      open: false
    },
    {
      question: "Lorem ipsum dolor sit amet?",
      answer: "Lorem ipsum odor amet, consectetuer adipiscing elit. Blandit venenatis nibh mus accumsan purus egestas felis.",
      open: false
    },
    {
      question: "Lorem ipsum dolor sit amet?",
      answer: "Lorem ipsum odor amet, consectetuer adipiscing elit. Blandit venenatis nibh mus accumsan purus egestas felis.",
      open: false
    },
    {
      question: "Lorem ipsum dolor sit amet?",
      answer: "Lorem ipsum odor amet, consectetuer adipiscing elit. Blandit venenatis nibh mus accumsan purus egestas felis.",
      open: false
    },
    {
      question: "Lorem ipsum dolor sit amet?",
      answer: "Lorem ipsum odor amet, consectetuer adipiscing elit. Blandit venenatis nibh mus accumsan purus egestas felis.",
      open: false
    },
    {
      question: "Lorem ipsum dolor sit amet?",
      answer: "Lorem ipsum odor amet, consectetuer adipiscing elit. Blandit venenatis nibh mus accumsan purus egestas felis.",
      open: false
    },
  ]

  const toggleContent = (e: React.MouseEvent, i: number) => {
    let el = gsap.utils.selector(e.currentTarget);
    if (questions[i].open) {
      gsap.to(el(".faq-dropdown"), { height: "0px", duration: 0.5, ease: "Power2.easeOut" });

    } else {
      gsap.to(el(".faq-dropdown"), { height: "auto", duration: 0.5, ease: "Power2.easeOut" });
    }

    questions[i].open = !questions[i].open;
  }

  const secondColumnStart = Math.floor(questions.length / 2);

  const faqElem = (q, i: number) => {
    return <div className="faq-item" onClick={(e) => toggleContent(e, i)}>
      <div className="faq-header">
        {/* <span className="faq-header-number">
          {i + 1}
        </span> */}
        <h3 className="faq-header-question">
          {q.question}
        </h3>
      </div>
      <div className="faq-dropdown">
        <p className="faq-text">{q.answer}</p>
        <p>&zwj;</p>
      </div>
    </div>
  }

  return <div className="wrapper-section">
    <div className="wrapper-content">
      <h1>FAQs</h1>
      <div className="faq-grid">
        <div className="faq-column">
          {questions.slice(0, secondColumnStart).map((item, i) => faqElem(item, i))}
        </div>
        <div className="faq-column">
          {questions.slice(secondColumnStart, questions.length).map((item, i) => faqElem(item, i))}
        </div>
        {/* {questions.map((q, i) => (
          <div className="faq-item" onClick={(e) => toggleContent(e, i)}>
            <div className="faq-header">
              <span className="faq-header-number">
                {i + 1}
              </span>
              <h3 className="faq-header-question">
                {q.question}
              </h3>
            </div>
            <div className="faq-dropdown">
              <p className="faq-text">{q.answer}</p>
              <p>&zwj;</p>
            </div>
          </div>
        ))} */}
      </div>
    </div>
  </div>;
};

export default FAQSection;
