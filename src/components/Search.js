import React from "react";

const Search = ({ searchChange }) => (
  <div className="pa2">
    <input
      className="pa3 ba b--green bg-lightest-blue"
      type="text"
      placeholder="Search Rebort"
      onChange={searchChange}
    />
  </div>
);

export default Search;
