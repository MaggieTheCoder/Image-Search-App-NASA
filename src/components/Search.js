import React, { useState } from "react";
import "../styles/Search.css";
import getImages from "../requests/getImages";
import PropTypes from "prop-types";
import SearchResults from "./SearchResults";

const Search = ({ setSearchResults }) => {
  const [value, setValue] = useState();
  const handleSubmit = async (event) => {
    event.preventDefault();
    setSearchResults(await getImages(value));
  };
  return (
    <>
      <form className="search-form" onSubmit={handleSubmit}>
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

SearchResults.propTypes = {
  setSearchResults: PropTypes.func,
};
export default Search;
