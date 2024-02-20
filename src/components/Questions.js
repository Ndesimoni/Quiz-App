import React from "react";
import Options from "./Options";
import { useCusHookValue } from "../context/ReactQuizContext";

function Questions() {
  const { questions, index } = useCusHookValue();

  return (
    <div>
      <h4>{questions.question}</h4>
      <Options questions={questions[index]} />
    </div>
  );
}

export default Questions;
