import React, { useState } from "react";

export default function Search() {
  let [searchWord, setSearchWord] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${searchWord}`);
  }
  function handleSearchWordChanget(event) {
    setSearchWord(event.target.value);
  }
  return (
    <div>
      <form onSubmit={search}>
        <input type="search" onChange={handleSearchWordChanget} />
        <input type="submit" />
      </form>
    </div>
  );
}
