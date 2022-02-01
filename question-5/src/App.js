import { useState } from "react";
import "./App.module.css";

function App() {
  const [word, setWord] = useState("");
  const [rhymes, setRhymes] = useState([]);

  const findRhymes = async (event) => {
    event.preventDefault();
    const result = await fetch(
      `https://api.datamuse.com/words?rel_rhy=${word}`
    );
    const data = await result.json();
    setRhymes(data.map((wData) => wData.word));
  };
  return (
    <div>
      <p>Enter a word and click find to find words that rhyme.</p>
      <form>
        <input
          type="text"
          onChange={(event) => setWord(event.target.value)}
          value={word}
        />
        <button onClick={findRhymes}>Find</button>
        <ul>
          {rhymes.map((rhyme) => (
            <li key={rhyme}>{rhyme}</li>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default App;
