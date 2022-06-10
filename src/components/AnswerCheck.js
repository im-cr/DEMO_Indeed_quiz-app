import React from "react";

const AnswerCheck = ({ currentAnswer, rightAnswer }) => {
  const handleCheck = () => {
    if (currentAnswer !== null) {
      return currentAnswer === rightAnswer
        ? "You got it right!"
        : "Sorry! Wrong Answer";
    }
  };
  const alertClass = currentAnswer === rightAnswer ? "is-correct" : "is-wrong";

  return (
    <div className={`answer answer--alert ${alertClass}`}>{handleCheck()}</div>
  );
};

export default AnswerCheck;
