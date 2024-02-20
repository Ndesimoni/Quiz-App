import { useCusHookValue } from "../context/ReactQuizContext";

const StartScreen = () => {
  const { numQuestions, dispatch } = useCusHookValue();
  return (
    <div className="app">
      <h2>Welcome To The React Quiz</h2>
      <h3> {numQuestions} Questions to test your React knowledge, </h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        let's go ...
      </button>
    </div>
  );
};

export default StartScreen;
