import React from "react";
import "./sidebar.css";
import { useFilter } from "../../../Context/filter-context";

function Sidebar() {
  const { filters, dispatch } = useFilter();
  return (
    <aside className="sidebar">
      <div className="filters">
        <p className="filter-type weight-semi-bold font-medium-large filter-heading">
          FILTERS
          <span
            className="weight-normal font-small"
            onClick={() => dispatch({ type: "RESET" })}
          >
            CLEAR
          </span>
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
                checked={filters.sortBy === "lowToHigh"}
                onClick={() =>
                  dispatch({ type: "SORT_BY", payload: { value: "lowToHigh" } })
                }
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
                checked={filters.sortBy === "highToLow"}
                onClick={() =>
                  dispatch({ type: "SORT_BY", payload: { value: "highToLow" } })
                }
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
                name="all"
                id="all"
                className="sidebar-filter-input"
                checked={filters.categories.all}
                onChange={(e) =>
                  dispatch({
                    type: "FILTER_BY",
                    payload: { value: e.target.checked, key: "all" },
                  })
                }
              />
              <label htmlFor="all" className="sidebar-filter-label">
                All
              </label>
            </li>
            <li className="sidebar-filter-item">
              <input
                type="checkbox"
                name="equipment"
                id="equipment"
                className="sidebar-filter-input"
                checked={filters.categories.equipments}
                onChange={(e) =>
                  dispatch({
                    type: "FILTER_BY",
                    payload: { value: e.target.checked, key: "equipments" },
                  })
                }
              />
              <label htmlFor="equipment" className="sidebar-filter-label">
                Equipments
              </label>
            </li>
            <li className="sidebar-filter-item">
              <input
                type="checkbox"
                name="clothes"
                id="clothes"
                className="sidebar-filter-input"
                checked={filters.categories.clothes}
                onChange={(e) =>
                  dispatch({
                    type: "FILTER_BY",
                    payload: { value: e.target.checked, key: "clothes" },
                  })
                }
              />
              <label htmlFor="clothes" className="sidebar-filter-label">
                Clothes
              </label>
            </li>
            <li className="sidebar-filter-item">
              <input
                type="checkbox"
                name="hand-gloves"
                id="hand-gloves"
                className="sidebar-filter-input"
                checked={filters.categories.handGloves}
                onChange={(e) =>
                  dispatch({
                    type: "FILTER_BY",
                    payload: { value: e.target.checked, key: "handGloves" },
                  })
                }
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
                checked={filters.categories.dumbells}
                onChange={(e) =>
                  dispatch({
                    type: "FILTER_BY",
                    payload: { value: e.target.checked, key: "dumbells" },
                  })
                }
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
                id="4-stars"
                className="sidebar-filter-input"
                onClick={() =>
                  dispatch({
                    type: "OTHER_FILTERS",
                    payload: {
                      value: 4,
                      key: "rating",
                    },
                  })
                }
              />
              <label htmlFor="4-stars" className="sidebar-filter-label">
                4 Stars and above
              </label>
            </li>
            <li className="sidebar-filter-item">
              <input
                type="radio"
                name="rating"
                id="3-stars"
                className="sidebar-filter-input"
                onClick={() =>
                  dispatch({
                    type: "OTHER_FILTERS",
                    payload: {
                      value: 3,
                      key: "rating",
                    },
                  })
                }
              />
              <label htmlFor="3-stars" className="sidebar-filter-label">
                3 Stars and above
              </label>
            </li>
            <li className="sidebar-filter-item">
              <input
                type="radio"
                name="rating"
                id="2-stars"
                className="sidebar-filter-input"
                onClick={() =>
                  dispatch({
                    type: "OTHER_FILTERS",
                    payload: {
                      value: 2,
                      key: "rating",
                    },
                  })
                }
              />
              <label htmlFor="2-stars" className="sidebar-filter-label">
                2 Stars and above
              </label>
            </li>
          </ul>
        </div>
        {/* Ratings Filter End  */}
        <div className="filter-type" aria-label="filter-type">
          <p className="weight-semi-bold font-medium">Others</p>
          <div className="margin-vertical-lg"></div>
          <ul className="list-style-none filter-list">
            <li className="sidebar-filter-item">
              <input
                type="checkbox"
                name="include-out-of-stock"
                id="include-out-of-stock"
                className="sidebar-filter-input"
                checked={filters.includeOutOfStock}
                onChange={(e) =>
                  dispatch({
                    type: "OTHER_FILTERS",
                    payload: {
                      value: e.target.checked,
                      key: "includeOutOfStock",
                    },
                  })
                }
              />
              <label
                htmlFor="include-out-of-stock"
                className="sidebar-filter-label"
              >
                Include Out Of Stock
              </label>
            </li>
            <li className="sidebar-filter-item">
              <input
                type="checkbox"
                name="fast-delivery"
                id="fast-delivery"
                className="sidebar-filter-input"
                checked={filters.fastDelivery}
                onChange={(e) =>
                  dispatch({
                    type: "OTHER_FILTERS",
                    payload: { value: e.target.checked, key: "fastDelivery" },
                  })
                }
              />
              <label htmlFor="fast-delivery" className="sidebar-filter-label">
                Fast Delivery
              </label>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
