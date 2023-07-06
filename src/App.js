import React, { useState } from "react";
import "./App.css";

function App() {
  let headingText = "inside out";
  const [targetValue, setTargetValue] = useState("");

  const emojiObject = {
    "😊": "Smiling face",
    "😄": "Grinning face with smiling eyes",
    "😍": "Smiling face with heart eyes",
    "😎": "Smiling face with sunglasses",
    "😢": "Crying face",
    "😡": "Angry face",
    "😘": "Face blowing a kiss",
    "😴": "Sleeping face",
  };

  function handleOnChangeEvent(event) {
    let inputEmoji = event.target.value;

    if (!inputEmoji) {
      setTargetValue("");
      return;
    }

    if (inputEmoji in emojiObject) {
      setTargetValue(emojiObject[inputEmoji]);
    } else {
      setTargetValue("We don't have that emoji in our database.");
    }
  }

  function onEmojiClickEvent(key) {
    if (key in emojiObject) {
      setTargetValue(emojiObject[key]);
    } else {
      setTargetValue("We don't have that emoji in our database.");
    }
  }

  return (
    <div className="App">
      <h1>{headingText}</h1>
      <input onChange={handleOnChangeEvent} type="text"></input>
      <h4>{targetValue}</h4>
      {Object.keys(emojiObject).map((key) => {
        return (
          <li key={key} onClick={() => onEmojiClickEvent(key)}>
            {key}
          </li>
        );
      })}
    </div>
  );
}

export default App;
