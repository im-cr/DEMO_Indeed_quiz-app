import React, { useContext } from "react";
import Answer from "./Answer";
import AnswerCheck from "./AnswerCheck";
import { QuizContext } from "../context/QuizContext";
import { clearInputs } from "../utils/helpers.js";

const Question = ({ currentIdx, currentQuestion }) => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentAnswer = quizState.currentAnswer;
  const correctAnswer = currentQuestion.rightAnswer.toString();

  return (
    <>
      <div
        className="question question--container"
        id={`question-${currentIdx}`}
      >
        <p className="title title--question">{currentQuestion.question}</p>
        <div className="answer answer--container">
          {quizState.answers.map((answer, index) => (
            <Answer
              onClick={(e) => e.preventDefault()}
              key={index}
              id={index}
              groupId={`question-${currentIdx}`}
              multi={currentQuestion.multi}
              answerTxt={answer}
              currentAnswer={currentAnswer}
              rightAnswer={correctAnswer}
              handleSelect={(answerTxt) =>
                dispatch({
                  type: "QUESTION_ANSWER",
                  payload: { txt: answerTxt },
                })
              }
            />
          ))}
        </div>
        <AnswerCheck
          currentAnswer={currentAnswer}
          rightAnswer={correctAnswer}
        />
      </div>
      <button
        onClick={() => {
          clearInputs();
          dispatch({ type: "QUESTION_NEXT" });
        }}
        className="btn btn--next"
        disabled={quizState.currentAnswer ? "" : true}
      >
        Next question
      </button>
    </>
  );
};

export default Question;
