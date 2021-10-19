import "./App.css";
import AnswerBox from "./components/AnswerBox";
import Letter from "./components/Letter";

function App() {
  const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  const palabras = ["break", "case", "catch", "continue", "default", "delete", "do", "else", "finally", "for", "function", "instanceof", "return", "switch", "this", "throw", "typeof", "var", "void", "while", "with"];

  const palabra = ["p", "e", "r", "r", "o"]

  return (
    <>
      <div className="container">
        <h1>Ahorcado</h1>
        <AnswerBox index={palabra.indexOf(palabra[2])} letter={palabra[2]} worldLength={5} />
        <div className="letters-container">{letters.map((letter, index) => (<Letter key={index} letter={letter} />))}</div>

      </div>
    </>
  );
}

export default App;
