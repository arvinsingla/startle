import React, { useRef } from 'react';
import { useDeviceData } from 'react-device-detect';
import './WordleInput.css';

const MOBILE_SAFARI_TEXT = 'Mobile Safari'

function WorldInput({ value, onChange, isMatch }) {
  const letters = value.split('')
  const inputEl = useRef(null)
  const deviceData = useDeviceData()

  const onInputChange = (event) => {
    const inputValue = event.target.value;
    const re = /^[A-Za-z]{0,5}$/;
    if (inputValue === "" || re.test(inputValue)) {
      onChange(inputValue);
    }
  }

  const retainFocus = (event) => {
    // Retain focus on everything but Safari on iOS
    if (deviceData && deviceData.browser && deviceData.browser.name === MOBILE_SAFARI_TEXT) {
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
        <div className="WordleInput-letter">{letters[0] ?? ''}</div>
        <div className="WordleInput-letter">{letters[1] ?? ''}</div>
        <div className="WordleInput-letter">{letters[2] ?? ''}</div>
        <div className="WordleInput-letter">{letters[3] ?? ''}</div>
        <div className="WordleInput-letter">{letters[4] ?? ''}</div>
      </div>
    </div>
  );
}

export default WorldInput;
