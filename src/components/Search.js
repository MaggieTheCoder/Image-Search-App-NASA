import React, { useState } from "react";
import "../styles/Search.css";

const Search = () => {
  const [value, setValue] = useState();
  return (
    <>
      <form className="search-form">
        <input
          onChange={(e) => setValue(e.target.value)}
          className="search-input"
          type="text"
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </>
  );
};

export default Search;
