import React from "react";

function SearchBar() {
  return (
    <div className="input-box" aria-label="search-box">
      <input type="text" className="input" required />
      <label className="input-label">Search</label>
    </div>
  );
}

export default SearchBar;
