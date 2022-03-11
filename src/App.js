import React, { useState } from 'react';

import './App.css';
import WordleInput from './components/WordleInput/WordleInput';
import { generateWordList } from './lib/wordle'

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
        <p>Enter your starting word. If it goes <span className="green">green</span><br/>it has previously been the Wordle of the day.</p>
        <WordleInput value={word} onChange={onChange} isMatch={isMatch} />
      </main>
      <footer className="App-footer">
        Made by <a href="http://www.arvinsingla.com">Arvin</a>
      </footer>
    </div>
  );
}

export default App;
