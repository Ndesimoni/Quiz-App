import { useCusHookValue } from "../context/ReactQuizContext";

const FinishScreen = () => {
  const { points, maxPossiblePoints, highScore, dispatch } = useCusHookValue();
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "🙃";
  if (percentage >= 0 && percentage < 50) emoji = "🤨";
  if (percentage === 0) emoji = "🤦‍♂️";

  return (
    <>
      <p className="result">
        <span>{emoji}</span> you scored <strong>{points} </strong> out of{" "}
        {maxPossiblePoints}
        {Math.ceil(percentage)}
      </p>

      <p className="highscore"> ( high score: {highScore} points )</p>

      <div className="btn btn-ui" onClick={() => dispatch({ type: "reset" })}>
        Reset
      </div>
    </>
  );
};

export default FinishScreen;
