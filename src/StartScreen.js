

const StartScreen = ({numQuestions}) => {
  return (
    <div className="app">
      <h2>Welcome To The React Quiz</h2>
      <h3> {numQuestions} Questions to test your React knowledge, </h3>
      <button className="btn,btn-ui">let's go ...</button>
    </div>
  )
}

export default StartScreen
