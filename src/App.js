import React, { useState, useEffect } from "react";
import "./App.css";

/* This was insoired by cinthialandia code*/

var sounds = {
  "81": new Audio("/music/meep-morp.mp3"),
  "87": new Audio("/music/steven-amethyst-the-bits.mp3"),
  "69": new Audio("/music/stop-singing.mp3"),
  "65": new Audio("/music/steven-nooooooooooooo.mp3"),
  "83": new Audio("/music/womp-womp-1.mp3"),
  "68": new Audio("/music/sleep-is-a-curse.mp3"),
  "90": new Audio("/music/i-am-an-eternal-flame-baby-ruby.mp3"),
  "88": new Audio("/music/i-can-make-a-promise3.mp3"),
  "67": new Audio("/music/steven-universe-theme-song-with-lyrics.mp3"),
};

const titles = {
  "81": "Meep Morp 😆",
  "87": "THE BITS! 😄",
  "69": "STOP SINGING ✋🎤",
  "65": "NOOOOOOOOOOOOOOOOOOOO! 😨",
  "83": "Womp Womp 🤪",
  "68": "Sleep is a curse 😴",
  "90": "I am an enternal flame baby! 🔥",
  "88": "I can make a promise ❤️🎵",
  "67": "Theme Song 💎🎵",
};

function App() {
  const [clickedKey, setClickedKey] = useState("");
  const [name, setName] = useState(" Click any button to play");

  var playSound = function (key) {
    if (key && sounds[key]) {
        sounds[key].currentTime = 0;
        sounds[key].play();
        setClickedKey(key);
        setName(titles[key]);
    }
};


  var handleClick = function (e) {
    var key = e.currentTarget.dataset.key;
    playSound(key);
};


  const handleKeydown = function (e) {
    const keyCode = e.keyCode.toString();
    playSound(keyCode);
  };

  const handleTransitionEnd = () => {
    setClickedKey("");
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeydown);
    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return (
    <div className="App">
      <div className="title-drum-machine">Steven Universe Drum Machine</div>
      <div id="drum-machine">
        <div id="display">
          <button
            onTransitionEnd={handleTransitionEnd}
            className={
              clickedKey === "81" ? "drum-button clicked" : "drum-button"
            }
            style={{ backgroundColor: "#ffadad" }}
            data-key="81"
            onClick={handleClick}
          >
            Q
          </button>
          <button
            onTransitionEnd={handleTransitionEnd}
            className={
              clickedKey === "87" ? "drum-button clicked" : "drum-button"
            }
            style={{ backgroundColor: "#ffd6a5" }}
            data-key="87"
            onClick={handleClick}
          >
            W
          </button>
          <button
            onTransitionEnd={handleTransitionEnd}
            className={
              clickedKey === "69" ? "drum-button clicked" : "drum-button"
            }
            style={{ backgroundColor: "#fdffb6" }}
            data-key="69"
            onClick={handleClick}
          >
            E
          </button>

          <button
            onTransitionEnd={handleTransitionEnd}
            className={
              clickedKey === "65" ? "drum-button clicked" : "drum-button"
            }
            style={{ backgroundColor: "#caffbf" }}
            data-key="65"
            onClick={handleClick}
          >
            A
          </button>
          <button
            onTransitionEnd={handleTransitionEnd}
            className={
              clickedKey === "83" ? "drum-button clicked" : "drum-button"
            }
            style={{ backgroundColor: "#9bf6ff" }}
            data-key="83"
            onClick={handleClick}
          >
            S
          </button>
          <button
            onTransitionEnd={handleTransitionEnd}
            className={
              clickedKey === "68" ? "drum-button clicked" : "drum-button"
            }
            style={{ backgroundColor: "#a0c4ff" }}
            data-key="68"
            onClick={handleClick}
          >
            D
          </button>

          <button
            onTransitionEnd={handleTransitionEnd}
            className={
              clickedKey === "90" ? "drum-button clicked" : "drum-button"
            }
            style={{ backgroundColor: "#bdb2ff" }}
            data-key="90"
            onClick={handleClick}
          >
            Z
          </button>
          <button
            onTransitionEnd={handleTransitionEnd}
            className={
              clickedKey === "88" ? "drum-button clicked" : "drum-button"
            }
            style={{ backgroundColor: "#ffc6ff" }}
            data-key="88"
            onClick={handleClick}
          >
            X
          </button>
          <button
            onTransitionEnd={handleTransitionEnd}
            className={
              clickedKey === "67" ? "drum-button clicked" : "drum-button"
            }
            style={{ backgroundColor: "#ffadad" }}
            data-key="67"
            onClick={handleClick}
          >
            C
          </button>
        </div>
      </div>
      <div className="title">{name}</div>
    </div>
  );
};

export default App;