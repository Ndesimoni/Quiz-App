// import { useContext } from "react";

import { useCusHookValue } from "../context/ReactQuizContext";

const Progress = () => {
  const { index, numQuestions, points, maxPossiblePoints, answer } =
    useCusHookValue();

  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question {index + 1} / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> /{maxPossiblePoints}
      </p>
    </header>
  );
};

export default Progress;
