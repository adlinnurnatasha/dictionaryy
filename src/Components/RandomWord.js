import React, { useState, useEffect } from "react";
import "./RandomWord.css";

const RandomWord = () => {
  const [randomWord, setRandomWord] = useState([]);

  //The Actual API
  useEffect(() => {
    fetch("https://random-words-api.vercel.app/word")
      .then((result) => result.json())
      .then((data) => setRandomWord(data));
  }, []);

  //Backup API - Words only
  // useEffect(() => {
  //   fetch("https://random-word-api.herokuapp.com/word?number=1")
  //     .then((result) => result.json())
  //     .then((data) => setRandomWord(data));
  // }, []);

  return (
    <div className="wotd">
      <div className="wotd-title">#WOTD</div>
      <div className="genWord">
        {randomWord.map((r, idx) => {
          return (
            <div key={idx}>
              <div className="theWord">"{r.word}"</div>
              <div className="definition">{r.definition}</div>
              {/* <div className="theWord">"{r}"</div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RandomWord;
