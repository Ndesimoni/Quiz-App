

const Options = ({ questions, dispatch, answer }) => {
    console.log(questions)
    return (
        <div className="options">
            {questions.options.map((option, index) => <button className={`btn btn-option ${index === answer ?"answer":""} ${index===questions.correctOption?"correct":"wrong"}`}
            key={option}
            onClick={() => dispatch({ type: "newAnswer", 
            payload: index })}>{option}</button>)}
        </div>
    )
}

export default Options
