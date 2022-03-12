import React, { useRef } from 'react';
import './WordleInput.css';

function WorldInput({ value, onChange, isMatch, isIOS }) {
  const letters = value.split('')
  const inputEl = useRef(null)

  const onInputChange = (event) => {
    const inputValue = event.target.value;
    const re = /^[A-Za-z]{0,5}$/;
    if (inputValue === "" || re.test(inputValue)) {
      onChange(inputValue);
    }
  }

  const retainFocus = (event) => {
    // Retain focus on everything but Safari on iOS
    if (isIOS) {
      return
    }
    event.target.focus()
  }

  const giveInputFocus = () => {
    inputEl.current.focus()
  }

  return (
    <div className="WorldeInput">
      <input
        autoFocus
        className="WorldeInput-input"
        type="text"
        onChange={onInputChange}
        onBlur={retainFocus}
        value={value}
        ref={inputEl}
      />
      <div onClick={giveInputFocus} className={isMatch ? 'WordleInput-letters match' : 'WordleInput-letters'}>
        <div className={letters[0] ? 'WordleInput-letter hasletter' : 'WordleInput-letter'}>{letters[0] ?? ''}</div>
        <div className={letters[1] ? 'WordleInput-letter hasletter' : 'WordleInput-letter'}>{letters[1] ?? ''}</div>
        <div className={letters[2] ? 'WordleInput-letter hasletter' : 'WordleInput-letter'}>{letters[2] ?? ''}</div>
        <div className={letters[3] ? 'WordleInput-letter hasletter' : 'WordleInput-letter'}>{letters[3] ?? ''}</div>
        <div className={letters[4] ? 'WordleInput-letter hasletter' : 'WordleInput-letter'}>{letters[4] ?? ''}</div>
      </div>
    </div>
  );
}

export default WorldInput;
