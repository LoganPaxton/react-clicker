import React, { useEffect, useState } from 'react';
import { useClick } from './ClickContext.jsx'

function Codes() {
  const { clicks, setClicks } = useClick();

  const [showInput, setShowInput] = useState(false);
  
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key == "t") {
        setShowInput(true);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const clickHandler = () => {
    const val = document.getElementById("code-input").value;
    console.log(val)

    if (val == "debug") {
      setClicks(clicks + 1000);
    }

    setShowInput(false);
  }

  return (
    <div>
      {showInput && (
        <div id="code-container">
          <input
            type="text"
            autoCorrect="off"
            autoCapitalize="off"
            autoComplete="off"
            placeholder='Code'
            id="code-input"
          />
          <br></br>
          <button id="code-submit" onClick={clickHandler}>Submit</button>
        </div>
      )}
    </div>
  )
}

export default Codes;
