import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Search.css";


export default function Search(props) {
  let [searchWord, setSearchWord] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data)
  }

  function search() {
    //documentation for api = https://www.shecodes.io/learn/apis/dictionary
    let apiKey = `524437caf2bf7e4a9413b557e3t8od0a`;
    let apiURL = `https://api.shecodes.io/dictionary/v1/define?word=${searchWord}&key=${apiKey}`;
    axios.get(apiURL).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function load(){
    setLoaded(true)
    search();
  }
  function handleSearchWordChange(event) {
    setSearchWord(event.target.value);
  }

  if (loaded){
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
    </div>
  );
} else{
    load();
    return "Loaded";
}
}
