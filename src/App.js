import "./App.css";
import AnswerBox from "./components/AnswerBox";
import HangManBox from "./components/HangManBox";
import Letter from "./components/Letter";

function App() {
  const palabra = ["p", "e", "r", "r", "o"]

  return (
    <AnswerBox index={palabra.indexOf(palabra[2])} letter={palabra[2]} worldLength={5} />

    <>
      <HangManBox></HangManBox>
      <Letter letter={"S"} />

  );
}

export default App;
