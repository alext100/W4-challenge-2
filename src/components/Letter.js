import "./Letter.css";
const Letter = ({ letter, actionOnClick }) => {
  return (
    <div className="letter" onClick={actionOnClick}>
      <p>{letter}</p>
    </div>
  );
};

export default Letter;
