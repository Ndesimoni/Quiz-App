import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";






const initialState = {
  questions: [],
  // 'loading', 'error', 'ready', 'active', 'finished'
  status: "dataRecieved"
}


function reducer(state, action) {
  switch (action.type) {

    case "ready":
      return {
        ...state,
        questions: action.payload,
        status: "ready"
      }

    case "dataFailed":
      return {
        ...state,
        status: "error"
      }

    default: throw new Error('unkown Error')
  }

}



function App() {

  const [state, dispatch] = useReducer(reducer, initialState)
  console.log(state)

  useEffect(() => {
    fetch("http://localhost:9000/questions").then((res) => res.json()).then((data) => dispatch({ type: "ready", payload: data })).catch((error) => dispatch({type:"dataFailed"}))
  }, [])

  return (
    <div className="app">
      <Header />
      <Main>
        <p>1/15</p>
        <p>Question ?</p>
      </Main>
    </div>
  );
}

export default App;
