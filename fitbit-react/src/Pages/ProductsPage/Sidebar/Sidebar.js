import React from "react";
import "./sidebar.css";
function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="filters">
        <p className="filter-type weight-semi-bold font-medium-large filter-heading">
          FILTERS
          <span className="weight-normal font-small">CLEAR</span>
        </p>
        {/*  Sort By Filter Start   */}
        <div className="filter-type" aria-label="filter-type">
          <p className="weight-semi-bold font-medium">SORT BY</p>
          <div className="margin-vertical-lg"></div>
          <ul className="list-style-none filter-list">
            <li className="sidebar-filter-item">
              <input
                type="radio"
                name="sort-by"
                value="price-low-to-high"
                id="price-low-to-high"
                className="sidebar-filter-input"
              />
              <label
                htmlFor="price-low-to-high"
                className="sidebar-filter-label"
              >
                Price low to high
              </label>
            </li>
            <li className="sidebar-filter-item">
              <input
                type="radio"
                name="sort-by"
                value="price-high-to-low"
                id="price-high-to-low"
                className="sidebar-filter-input"
              />
              <label
                htmlFor="price-high-to-low"
                className="sidebar-filter-label"
              >
                Price high to low
              </label>
            </li>
          </ul>
        </div>
        {/* Sort By Filter End  */}

        {/*   Categories Filter Start   */}
        <div className="filter-type" aria-label="filter-type">
          <p className="weight-semi-bold font-medium">Categories</p>
          <div className="margin-vertical-lg"></div>
          <ul className="list-style-none filter-list">
            <li className="sidebar-filter-item">
              <input
                type="checkbox"
                name="shoes"
                id="shoes"
                className="sidebar-filter-input"
              />
              <label htmlFor="shoes" className="sidebar-filter-label">
                Shoes
              </label>
            </li>
            <li className="sidebar-filter-item">
              <input
                type="checkbox"
                name="bags"
                id="bags"
                className="sidebar-filter-input"
              />
              <label htmlFor="bags" className="sidebar-filter-label">
                Bags
              </label>
            </li>
            <li className="sidebar-filter-item">
              <input
                type="checkbox"
                name="hand-gloves"
                id="hand-gloves"
                className="sidebar-filter-input"
              />
              <label htmlFor="hand-gloves" className="sidebar-filter-label">
                Hand Gloves
              </label>
            </li>
            <li className="sidebar-filter-item">
              <input
                type="checkbox"
                name="dumbells"
                id="dumbells"
                className="sidebar-filter-input"
              />
              <label htmlFor="dumbells" className="sidebar-filter-label">
                Dumbells
              </label>
            </li>
          </ul>
        </div>
        {/* Categories Filter End   */}

        {/* Ratings Filter Start  */}
        <div className="filter-type" aria-label="filter-type">
          <p className="weight-semi-bold font-medium">Ratings</p>
          <div className="margin-vertical-lg"></div>
          <ul className="list-style-none filter-list">
            <li className="sidebar-filter-item">
              <input
                type="radio"
                name="rating"
                id="5-stars"
                className="sidebar-filter-input"
              />
              <label htmlFor="5-stars" className="sidebar-filter-label">
                5 Stars
              </label>
            </li>
            <li className="sidebar-filter-item">
              <input
                type="radio"
                name="rating"
                id="4-stars"
                className="sidebar-filter-input"
              />
              <label htmlFor="4-stars" className="sidebar-filter-label">
                4 Stars
              </label>
            </li>
            <li className="sidebar-filter-item">
              <input
                type="radio"
                name="rating"
                id="3-stars"
                className="sidebar-filter-input"
              />
              <label htmlFor="3-stars" className="sidebar-filter-label">
                3 Stars
              </label>
            </li>
            <li className="sidebar-filter-item">
              <input
                type="radio"
                name="rating"
                id="2-stars"
                className="sidebar-filter-input"
              />
              <label htmlFor="2-stars" className="sidebar-filter-label">
                2 Stars
              </label>
            </li>
            <li className="sidebar-filter-item">
              <input
                type="radio"
                name="rating"
                id="1-star"
                className="sidebar-filter-input"
              />
              <label htmlFor="1-star" className="sidebar-filter-label">
                1 Star
              </label>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;