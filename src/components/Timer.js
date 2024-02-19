import React, { useEffect } from "react";
import { useCustom } from "./context/ContextProvider";

const Timer = () => {
  const { dispatch, secondsRemaining } = useCustom();
  const mins = Math.floor(secondsRemaining / 60);

  const sec = secondsRemaining % 60;

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "timer" });
    }, 1000);

    return () => clearInterval(id);
  }, [dispatch]);

  return (
    <div className="timer">
      {mins < 10 ? "0" : null}
      {mins}: {sec < 10 ? "0" : null}
      {sec}
    </div>
  );
};

export default Timer;
