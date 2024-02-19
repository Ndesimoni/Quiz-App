import React from "react";
import Options from "./Options";
import { useCustom } from "./context/ContextProvider";

function Questions() {
  const { questions, index } = useCustom();
  //   console.log(questions);
  //   console.log(questions.Options);
  return (
    <div>
      <h4>{questions.question}</h4>
      <Options questions={questions[index]} />
    </div>
  );
}

export default Questions;
