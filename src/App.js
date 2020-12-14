import React, { useState } from "react";
import "./App.css";

var emojiDictionary = {
  "🎨": "Artist Palette",
  "🎬": "Clapper Board",
  "🎫": "Ticket",
  "💢": "Showing Anger",
  "📑": "Bookmark Tab",
  "📤": "Outbox Tray",
  "📥": "Inbox Tray",
  "🔅": "Dim button",
  "🔆": "Bright button",
  "🔥": "Fire Burn",
  "🎭": "Performing Arts"
};

var emojiWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "Sorry, We don't have that in our database!";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
       <div class="top">
      <h1>This is the Emoji guessing game</h1>
      <h2>
        Learn the meaning of some of the lesser known emojis and find out what
        they mean!
      </h2>
      </div>
      <input
        placeholder="Enter an emoji given below or click one below"
        onChange={emojiInputHandler}
      ></input>
      <h2>
        {" "}
        <strong>{meaning}</strong>{" "}
      </h2>

      {emojiWeKnow.map(function (emoji) {
        return (
          <span
            className="emojiWeKnow"
            onClick={() => emojiClickHandler(emoji)}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
      <h2>These are some of the emojis for which you can find out the meaning</h2>
    </div>
  );
}
