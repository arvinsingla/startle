import React, { useState } from 'react';
import WordleInput from './components/WordleInput/WordleInput';
import { generateWordList } from './lib/wordle'
import './App.css';

function App() {
  const words = generateWordList()
  const [word, setWord] = useState('')

  const onChange = (value) => {
    setWord(value);
  };

  const isMatch = words.includes(word.toLowerCase())

  return (
    <div className="App">
      <header className="App-header">
        <h1>startle</h1>
      </header>
      <main className="App-content">
        <p>Enter your starting word. If it turns 🟩<br/>it has previously been the <a href="https://www.nytimes.com/games/wordle/index.html">Wordle</a> of the day.</p>
        <WordleInput value={word} onChange={onChange} isMatch={isMatch} />
      </main>
      <footer className="App-footer">
        Not in an way affilliated with Wordle<br/>
        Made by <a href="http://www.arvinsingla.com">Arvin</a>
      </footer>
    </div>
  );
}

export default App;
