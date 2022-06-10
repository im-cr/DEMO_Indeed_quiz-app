import { createContext, useReducer } from "react";
import questions from "../data/data.js";
import { answerShuffle } from "../utils/helpers.js";

const initialState = {
  questions,
  currentQuestionIdx: 0,
  showResults: false,
  answers: answerShuffle(questions[0]),
  currentAnswer: null,
  correctAnswerCount: 0,
};

//State reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "QUESTION_ANSWER": {
      const correctAnswerCount =
        action.payload.txt ===
        state.questions[state.currentQuestionIdx].rightAnswer[0]
          ? state.correctAnswerCount + 1
          : state.correctAnswerCount;
      return {
        ...state,
        currentAnswer: action.payload.txt,
        correctAnswerCount,
      };
    }
    case "QUESTION_NEXT": {
      const showResults =
        state.currentQuestionIdx === state.questions.length - 1;
      const currentQuestionIdx = showResults
        ? state.currentQuestionIdx
        : state.currentQuestionIdx + 1;
      const answers = showResults
        ? []
        : answerShuffle(state.questions[currentQuestionIdx]);
      return {
        ...state,
        currentQuestionIdx,
        showResults,
        answers,
        currentAnswer: null,
      };
    }
    case "RESET": {
      return initialState;
    }
    default:
      return state;
  }
};

//Create Quiz Context
export const QuizContext = createContext();

//Export context Provider
export const QuizProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
