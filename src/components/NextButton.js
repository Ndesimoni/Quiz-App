import { useCustom } from "./context/ContextProvider";

const NextButton = () => {
  const { answer, dispatch, index, numQuestions } = useCustom();
  if (answer === null) return null;

  if (index < numQuestions - 1)
    return (
      <div
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </div>
    );

  if (index === numQuestions - 1)
    return (
      <div className="btn btn-ui" onClick={() => dispatch({ type: "finish" })}>
        Finish
      </div>
    );
};

export default NextButton;
