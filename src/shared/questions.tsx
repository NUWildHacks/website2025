import { IQuestionList } from "../components/FAQ/QuestionList/QuestionList";

export const QUESTION_LIST: Array<IQuestionList> = [
  {
    header: "General",
    questions: [
      {
        question: "What is WildHacks?",
        answer: (
          <div>
            WildHacks is a <span>weekend-long event</span> where students work
            together to create cool software projects! You can expect{" "}
            <span>workshops</span>,{" "}
            <span>free food from Evanston restaurants</span>,{" "}
            <span>fun social and de-stress events</span>, <span>free swag</span>
            , and more!
          </div>
        ),
      },
      {
        question: "When is WildHacks?",
        answer: (
          <div>
            WildHacks 2025 will take place from{" "}
            <span>Saturday, April 5, 2025</span> to{" "}
            <span>Sunday, April 6, 2025</span>. However, hacking won't start
            until the tracks are released on <span>April 5</span> at{" "}
            <span>11:00 AM</span>, with check in for the event starting at{" "}
            <span>9:00 AM</span> that same day.
          </div>
        ),
      },
      {
        question: "Where is WildHacks?",
        answer: (
          <div>
            WildHacks will take place on the Northwestern University campus.
            More details will be released closer to the event.
          </div>
        ),
      },
      {
        question: "Is this hackathon purely coding-based?",
        answer: (
          <div>
            The hackathon will be <span>software-focused</span>, but don't worry
            if you don't have prior coding experience.
          </div>
        ),
      },
      {
        question: "Where can I find an event schedule?",
        answer: (
          <div>
            The full schedule will be released closer to the event, but check-in
            will begin at <span>9:00 AM</span> on{" "}
            <span>Saturday, April 5, 2025</span> with the opening ceremony
            starting at <span>10:00 AM</span>, and the closing ceremony will end
            at <span>5:00 PM</span> on <span>Sunday, April 6, 2025</span>.
          </div>
        ),
      },
      {
        question: "What will I build?",
        answer: (
          <div>
            We'll release a set of tracks at the start of the event, and your
            project must be related to one of them. The tracks will be broad
            enough to give you some creative freedom in what you develop but
            specific enough to give you some direction and prevent members from
            submitting things developed outside of the hackathon period.
          </div>
        ),
      },
      {
        question: "What will I submit?",
        answer: (
          <div>
            At the end of the hackathon, you'll submit your project's{" "}
            <span>source code</span>, a <span>2-minute video pitch</span>, and
            any other relevant resources to the WildHacks Dashboard. Top
            projects will be selected to <span>demo live on stage</span> to win
            prizes. A detailed rubric will be released during the event.
          </div>
        ),
      },
    ],
  },
  {
    header: "Registration / Teams",
    questions: [
      {
        question: "Who is eligible to participate?",
        answer: (
          <div>
            All <span>university students</span> are eligible to participate in
            WildHacks! High school students are unfortunately not eligible to
            participate in WildHacks.
          </div>
        ),
      },
      {
        question: "What if I've never coded before?",
        answer: (
          <div>
            WildHacks is open to students of <span>all experience levels</span>!
            We'll send out resources and we'll will have a Discord server on
            which you can ask questions.
          </div>
        ),
      },
      {
        question: "How will teams work?",
        answer: (
          <div>
            Teams can consist of up to <span>4 members</span>! We strongly
            encourage you to work with others.
          </div>
        ),
      },
      {
        question: "Are you required to have a team to register?",
        answer: (
          <div>
            <span>No, you are not required to register with a team.</span> At
            the start of the event, if you don't already have a team in mind,
            you can choose find a team to join or be randomly assigned to one.
            There will be time during the event to find team members, but you
            can also find members on the Discord server.
          </div>
        ),
      },
    ],
  },
  {
    header: "Logistics",
    questions: [
      {
        question: "Will there be sleeping / showering accommodations?",
        answer: (
          <div>
            There will be a room reserved overnight dedicated to sleeping on
            Saturday night only. We recommend bringing pillows and blankets.
            There are showers at Mudd Library, so make sure to bring shower gel,
            shampoo, a towel, and other things you might need. You're welcome to
            come to and go from the event as you please.
          </div>
        ),
      },
      {
        question: "Will transportation be reimbursed?",
        answer: "Transportation will not be reimbursed.",
      },
      {
        question: "How can I prepare for WildHacks?",
        answer: (
          <div>
            WildHacks is partnering with other computing clubs on campus to host
            introductory workshop nights during the week leading up to the
            hackathon. <span>These are 100% optional</span> but will not be
            recorded.
          </div>
        ),
      },
      {
        question: "Do I have to stay for the full event?",
        answer: (
          <div>
            No, you are free to leave the event before the hackathon ends!
            However, in order to claim prizes, you must be present at the
            closing ceremony on the afternoon of Sunday, April 6.
          </div>
        ),
      },
    ],
  },
  {
    header: "Support",
    questions: [
      {
        question: "How can I get in touch?",
        answer: (
          <div>
            Send us an email at{" "}
            <a href="mailto:wildhacks@northwestern.edu">
              wildhacks@northwestern.edu
            </a>
            ! We'd be happy to answer any questions about the event or steps to
            get involved.
          </div>
        ),
      },
      {
        question:
          "I'm interested in sponsoring WildHacks. Who should I contact?",
        answer: (
          <div>
            Send us an email at{" "}
            <a href="mailto:wildhacks@northwestern.edu">
              wildhacks@northwestern.edu
            </a>
            ! We'd be happy to talk!
          </div>
        ),
      },
    ],
  },
];

export default QUESTION_LIST;
