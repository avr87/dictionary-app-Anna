import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Search.css";
import Photos from "./Photos"


export default function Search(props) {
  let [searchWord, setSearchWord] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleSearchResponse(response) {
    setResults(response.data);
  }

  function handleSheCodesResponse(response) {
    setPhotos(response.data.photos);

  }

  function search() {
    //documentation for api = https://www.shecodes.io/learn/apis/dictionary
    let apiKey = `524437caf2bf7e4a9413b557e3t8od0a`;
    let apiURL = `https://api.shecodes.io/dictionary/v1/define?word=${searchWord}&key=${apiKey}`;
    axios.get(apiURL).then(handleSearchResponse);

    let sheCodesApiUrl = `https://api.shecodes.io/images/v1/search?query=${searchWord}&key=${apiKey}`;
    axios.get(sheCodesApiUrl).then(handleSheCodesResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function load() {
    setLoaded(true);
    search();
  }
  function handleSearchWordChange(event) {
    setSearchWord(event.target.value);
  }

  if (loaded) {
    return (
      <div className="Search">
        <section>
          <h2>What word do you want to look up?</h2>
          <div className="row">
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                onChange={handleSearchWordChange}
                className="searchBar col-9"
                defaultValue={props.defaultKeyword}
              />
              <input type="submit" className="enter col" />
            </form>
          </div>
          <div className="hint">suggested words: sunset, safari, yoga </div>
        </section>
        <Results results={results} />
        <Photos  photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
