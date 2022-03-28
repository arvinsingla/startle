import React, { useState } from 'react';
import WordleInput from './components/WordleInput/WordleInput';
import { useDeviceData } from 'react-device-detect';
import { generateWordList, isInFullWordLIst } from './lib/wordle'
import './App.css';

const OS_IOS = 'iOS'

function App() {
  const words = generateWordList()
  const [word, setWord] = useState('')
  const deviceData = useDeviceData()
  const isWordComplete = word.length === 5

  const onChange = (value) => {
    setWord(value);
  };

  const isMatch = words.includes(word.toLowerCase())
  const isIOS = deviceData && deviceData.os && deviceData.os.name === OS_IOS

  return (
    <div className="App">
      <header className="App-header">
        <h1>startle</h1>
      </header>
      <main className="App-content">
        <p>Enter your starting word. If it turns 🟩<br/>it was previously the <a href="https://www.nytimes.com/games/wordle/index.html">Wordle</a> of the day.</p>
        {isIOS &&
          <p>Tap a box to start</p>
        }
        <WordleInput value={word} onChange={onChange} isMatch={isMatch} isIOS={isIOS} />
        {isWordComplete && !isInFullWordLIst(word.toLowerCase()) &&
          <p className="notInWordList">Not in word list</p>
        }
      </main>
      <footer className="App-footer">
        Not in an way affilliated with Wordle<br/>
        Made by <a href="http://www.arvinsingla.com">Arvin</a>
      </footer>
    </div>
  );
}

export default App;
