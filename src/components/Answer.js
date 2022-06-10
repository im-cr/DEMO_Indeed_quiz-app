import React, { useRef } from "react";

let multiArr = [];
const Answer = ({
  answerTxt,
  id,
  groupId,
  multi,
  handleSelect,
  currentAnswer,
  rightAnswer,
}) => {
  const idKey = id + 1;
  const isRight = currentAnswer && answerTxt === rightAnswer;
  const isWrong = currentAnswer === answerTxt && currentAnswer !== rightAnswer;
  const chkClass = isRight ? "is-right" : isWrong ? "is-wrong" : "";
  const disabledClass = currentAnswer ? "disabled" : "";
  const radioInput = useRef([]);

  const handleMulti = () => {
    let newVal = radioInput.current.value;
    checkAnswer(newVal);
  };

  const checkAnswer = (txt) => {
    multiArr.push(txt);
    let aArr = multiArr.sort().join(",");
    let cArr = rightAnswer;
    let equalArr = (a, b) => JSON.stringify(a) === JSON.stringify(b);

    if (multiArr.length >= 2 || equalArr(aArr, cArr)) {
      handleSelect(aArr);
    }
  };

  return (
    <label
      className={`answer answer--item ${chkClass}`}
      id={idKey}
      htmlFor={`answer-${idKey}`}
    >
      <input
        id={`answer-${idKey}`}
        type="radio"
        value={answerTxt}
        name={multi ? "" : groupId}
        ref={radioInput}
        disabled={multi ? "" : disabledClass}
        onClick={() => {
          if (multi) handleMulti();
          else handleSelect(answerTxt);
        }}
      />
      <p>{answerTxt}</p>
    </label>
  );
};

export default Answer;
