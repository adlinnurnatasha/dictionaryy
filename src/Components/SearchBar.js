import React, { useState } from "react";
import "./SearchBar.css";
import ResultCard from "./ResultCard";
import { FaSearch } from "react-icons/fa";
import NoResults from "./NoResults";

const SearchBar = () => {
  const [word, setWord] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  //For result: found or not
  const [error, setError] = useState(null);

  //Fetching data after search button is clicked or Enter key is pressed
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
    //Clear searchbar input after clicked
    setWord("");
  };

  //Enable 'Enter' key to start searching
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      searchHandler();
      console.log("enter press here");
    }
  };

  return (
    <div className="search-container">
      <div className="searchBar">
        <input
          className="input"
          type="text"
          value={word}
          onChange={(event) => setWord(event.target.value)}
          onKeyPress={(e) => handleKeyPress(e)}
          placeholder="Search a word!"
        />
        <button onClick={searchHandler}>
          <FaSearch className="FaSearch" />
        </button>
      </div>

      <div className="searchResults">
        {/* Startup message */}
        {searchResult.length < 1 && !error && (
          <div className="startingMsg animate__animated animate__fadeIn animate__delay-2s">
            <p>Hello, there!</p>
            <p>Start searching your word!</p>
          </div>
        )}

        {/* During searching for word - using condition*/}
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
