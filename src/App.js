import './App.css';
import AnswerBox from './components/AnswerBox';

function App() {
  const palabra = ["p", "e", "r", "r", "o"]

  return (
    <AnswerBox index={palabra.indexOf(palabra[2])} letter={palabra[2]} worldLength={5} />
  );
}

export default App;
