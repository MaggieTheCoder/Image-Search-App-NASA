import React from "react";
import "../styles/SearchResults.css";
import PropTypes from "prop-types";

const SearchResults = ({ results }) => {
  if (!results.length) {
    return <p className="no-result">No results</p>;
  } else {
    return (
      <>
        <p className="search-results">Search Results</p>
        <div className="search-grid">
          {results.map((image) => (
            <img className="card-image" src={image} alt="spaceImage" />
          ))}
        </div>
      </>
    );
  }
};

SearchResults.propTypes = {
  results: PropTypes.arrayOf(PropTypes.string),
};
export default SearchResults;
