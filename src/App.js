import "./App.css";
import AnswerBox from "./components/AnswerBox";
import HangManBox from "./components/HangManBox";
import Letter from "./components/Letter";

function App() {
  return (
    <>
      <HangManBox></HangManBox>
      <Letter letter={"S"} />
      <AnswerBox letter={"S"} worldLength={10} />
    </>
  );
}

export default App;
