import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  let [searchWord, setSearchWord] = useState("");
  
  function handleResponse(response) {
    console.log(response.data.meanings);
  }
  function search(event) {
    event.preventDefault();

    //documentation for api = https://www.shecodes.io/learn/apis/dictionary
    let apiKey = `524437caf2bf7e4a9413b557e3t8od0a`;
    let apiURL = `https://api.shecodes.io/dictionary/v1/define?word=${searchWord}&key=${apiKey}`;
    axios.get(apiURL).then(handleResponse);
  }
  function handleSearchWordChange(event) {
    setSearchWord(event.target.value);
  }
  return (
    <div>
      <form onSubmit={search}>
        <input type="search" onChange={handleSearchWordChange} />
        <input type="submit" />
      </form>
    </div>
  );
}
