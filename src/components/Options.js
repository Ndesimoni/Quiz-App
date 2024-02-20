import { useCusHookValue } from "../context/ReactQuizContext";

const Options = ({ questions }) => {
  const { dispatch, answer } = useCusHookValue();

  const hasAnswer = answer !== null;
  // console.log(questions);
  // console.log(questions.options);

  return (
    <div className="options">
      {questions.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswer
              ? index === questions.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={option}
          disabled={hasAnswer}
          onClick={() =>
            dispatch({
              type: "newAnswer",
              payload: index,
            })
          }
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Options;
