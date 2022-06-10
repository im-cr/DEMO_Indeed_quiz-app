import React, { useContext } from "react";
import Question from "./Question";
import Results from "./Results";
import { QuizContext } from "../context/QuizContext";
import { ReactComponent as AppLogo } from "../assets/i/IndeedLogo.svg";

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currIndex = quizState.currentQuestionIdx + 1;
  const currQuestion = quizState.questions[quizState.currentQuestionIdx];
  const quizClass = quizState.showResults ? "results" : "quiz";

  return (
    <>
      <div className={`container container--${quizClass}`}>
        <AppLogo style={{ marginBottom: "2rem" }} />
        {!quizState.showResults ? (
          <>
            <h3 className="title title--progress">
              {`Question
              ${quizState.currentQuestionIdx + 1} of ${
                quizState.questions.length
              }
            `}
              <span>Score: {quizState.correctAnswerCount}</span>
            </h3>

            <Question currentIdx={currIndex} currentQuestion={currQuestion} />
          </>
        ) : (
          <Results
            answerCount={quizState.correctAnswerCount}
            quizSize={quizState.questions.length}
          />
        )}
      </div>
    </>
  );
};

export default Quiz;
