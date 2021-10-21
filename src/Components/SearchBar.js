import React, { useState } from "react";
import "./SearchBar.css";
import ResultCard from "./ResultCard";
import { FaSearch } from "react-icons/fa";
import NoResults from "./NoResults";

const SearchBar = () => {
  const [word, setWord] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [error, setError] = useState(null);

  const searchHandler = () => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((results) => results.json())
      .then((data) => {
        if (data.title === "No Definitions Found") {
          setError(data);
        } else {
          // Clear if no error
          setError(null);
          setSearchResult(data);
        }
      });
    setWord("");
  };

  return (
    <div className="search-container">
      <div className="searchBar">
        <input
          className="input"
          type="text"
          value={word}
          onChange={(event) => setWord(event.target.value)}
          placeholder="Search a word!"
        />
        <button onClick={searchHandler}>
          <FaSearch className="FaSearch" />
        </button>
      </div>

      <div className="searchResults">
        {searchResult.length < 1 && !error && (
          <div className="startingMsg">
            <p>Hello, there!</p>
            <p>Start searching your word!</p>
          </div>
        )}
        {error ? (
          <NoResults
            title={error.title}
            message={error.message}
            resolution={error.resolution}
          />
        ) : (
          searchResult.map((data, index) => {
            return (
              <ResultCard
                key={index}
                word={data.word}
                meanings={data.meanings}
                phonetics={data.phonetics}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default SearchBar;
