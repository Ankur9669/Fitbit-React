import React from "react";
import { useProduct } from "../../Context/products-context";

function SearchBar() {
  const { setSearchProductString } = useProduct();
  return (
    <div className="input-box" aria-label="search-box">
      <input
        type="text"
        className="input"
        onChange={(e) => setSearchProductString(e.target.value)}
        style={{ paddingLeft: "0.5rem" }}
      />
      <label className="input-label">Search</label>
    </div>
  );
}

export default SearchBar;
