import "./AnswerBox.css"

const AnswerBox = ({ letter, worldLength, index }) => {

    const lettersCamp = new Array(worldLength).fill(" ");
    lettersCamp[index] = letter

    return (
        <div className="answer-box">
            {lettersCamp.map((emptyElement, i) => (
                <div key={i} className="answer-box--camp">
                    <span className="answer-box-letter">{emptyElement}</span>
                </div>
            ))}
        </div>
    );
}

export default AnswerBox;
