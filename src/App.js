import React, { useState, useEffect } from 'react';
import WordleInput from './components/WordleInput/WordleInput';
import { useDeviceData } from 'react-device-detect';
import './App.css';

const OS_IOS = 'iOS'

function App() {
  const [wordList, setWordList] = useState({})
  const [word, setWord] = useState('')
  const deviceData = useDeviceData()

  // Download the word list
  useEffect(() => {
    const fetchData = async () => {
      const wordListUrl = 'https://storage.googleapis.com/startle/wordList.json'
      const response = await fetch(wordListUrl);
      const data = await response.json();
      setWordList(data);
    };

    fetchData();
  }, []);

  const onChange = (value) => {
    setWord(value);
  };

  const matchIndex = Object.keys(wordList).indexOf(word.toLowerCase())
  const isMatch = matchIndex !== -1
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
        {isMatch &&
          <p className="notInWordList">{wordList[word]}</p> 
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
