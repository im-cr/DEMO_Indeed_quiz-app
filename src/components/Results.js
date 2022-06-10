import React, { useState, useEffect, useContext } from "react";
import { QuizContext } from "../context/QuizContext";
import { randomImg, getFullDate } from "../utils/helpers";

const Results = ({ answerCount, quizSize }) => {
  const [quizState, dispatch] = useContext(QuizContext);
  const [score, setScore] = useState([answerCount, quizSize]);
  const [highScore, setHighscore] = useState([4, 5]);
  const [scoreDate, setScoreDate] = useState(getFullDate());

  const bestScore = () => {
    const perScore = (score[0] / score[1]) * 100;
    const perHigh = (highScore[0] / highScore[1]) * 100;

    if (perScore > perHigh) {
      setHighscore([score[0], score[1]]);
      setScoreDate(getFullDate());
    }
    return `Your best score so far was ${highScore[0]} out of ${highScore[1]} questions which you got on
    ${scoreDate}`;
  };

  useEffect(() => {
    setScore([answerCount, quizSize]);
  }, []);

  return (
    <div className="results results--cont">
      <div className="results results--img">
        <img
          src={randomImg(answerCount, quizSize)}
          alt="Results"
          title="Congrats! You finished"
        />
      </div>
      <h1 className="title title--results">You're a Trivia master!</h1>
      <p>{`You got ${answerCount} out of ${quizSize}`}</p>
      <p>{bestScore()}</p>
      <button
        className="btn btn--reset"
        onClick={() => {
          dispatch({ type: "RESET" });
        }}
      >
        Play Again!
      </button>
    </div>
  );
};

export default Results;
