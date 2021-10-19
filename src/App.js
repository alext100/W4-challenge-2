import "./App.css";
import AnswerBox from "./components/AnswerBox";
import Letter from "./components/Letter";

function App() {
  return (
    <>
      <Letter letter={"S"} />
      <AnswerBox letter={"S"} worldLength={10} />
    </>
  );
}

export default App;
