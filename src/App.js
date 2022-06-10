import Quiz from "./components/Quiz";
import { QuizProvider } from "./context/QuizContext";

function App() {
  return (
    <div className="app app--container">
      <QuizProvider>
        <Quiz />
      </QuizProvider>
    </div>
  );
}

export default App;
