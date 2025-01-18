import Question, { IQuestion } from "../Question/Question"

import "../FAQ.scss"

export interface IQuestionList {
  header: string
  questions: Array<IQuestion>
}

export const QuestionList: React.FC<IQuestionList> = ({
  header,
  questions,
}) => {
  let first_half_of_questions = questions.slice(0, questions.length / 2)
  let last_half_of_questions = questions.slice(questions.length / 2)
  return (
    <div className="faq__questionlist">
      <div>
        <div className="faq__subheader">{header}</div>
        <div className="faq__questions_container">
          <div className="faq__questions_column">
            {first_half_of_questions.map((elem, index) => (
              <Question
                question={elem.question}
                answer={elem.answer}
                key={`questionlist_${elem.question}_${index}`}
              />
            ))}
          </div>
          <div className="faq__questions_column">
            {last_half_of_questions.map((elem, index) => (
              <Question
                question={elem.question}
                answer={elem.answer}
                key={`questionlist_${elem.question}_${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuestionList
