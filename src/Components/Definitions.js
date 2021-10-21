import React, { useState } from "react";
import "./Definitions.css";

//From ResultCard - to display each object in Definitions
const Definitions = (props) => {
  //Show/hide synonym & antonym
  const [showSynonym, setShowSynonym] = useState(false);
  const [showAntonym, setShowAntonym] = useState(false);

  return (
    <div className="definitions">
      {props.definitions.map((m) => {
        return (
          <div key={m.example}>
            <div className="word-definition">{m.definition}</div>
            <div className="word-example">{m.example}</div>
            <div className="synonymsList">
              <div
                className="synonym-btn"
                onClick={() => {
                  setShowSynonym(!showSynonym);
                }}
              >
                Synonyms &#9656;
              </div>
              <div className="synonym">
                {m.synonyms.map((s) => {
                  if (showSynonym) {
                    return <div className="single-synonym">{s}</div>;
                  }
                  return <></>;
                })}
              </div>
            </div>
            <div className="antonymsList">
              <div
                className="antonym-btn"
                onClick={() => {
                  setShowAntonym(!showAntonym);
                }}
              >
                Antonyms &#9656;
              </div>
              <div className="antonym">
                {m.antonyms.map((a) => {
                  if (showAntonym) {
                    return <div className="single-antonym">{a}</div>;
                  }
                  return <></>;
                })}
              </div>
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Definitions;
