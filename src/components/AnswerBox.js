import "./AnswerBox.css"

const AnswerBox = ({ letter, worldLength }) => {

    const lettersCamp = new Array(worldLength).fill(" ");
    console.log('lettersCamp: ', lettersCamp);

    return (
        <div className="answer-box">
            {lettersCamp.map((letter) => {
                <div className="answer-box--camp">{letter}</div>
            })}
        </div>
    );
}

export default AnswerBox;
