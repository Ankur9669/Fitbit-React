import React, { useEffect } from "react";
import Axios from "axios";
import {
  VerticalCard,
  products,
  useFilter,
  useProduct,
  filterByCategory,
  sortByHighToLow,
  sortByLowToHigh,
} from "../index";
import { fetchProducts } from "../../../Util/fetch-products";

function ProductListing() {
  const { filters, dispatch } = useFilter();
  const { products: products1, dispatch: dispatchProducts } = useProduct();

  const getSortedData = (state, filteredData) => {
    let updatedData = [...filteredData];
    if (state.sortBy === "highToLow") {
      sortByHighToLow(updatedData);
    } else if (state.sortBy === "lowToHigh") {
      sortByLowToHigh(updatedData);
    }
    return updatedData;
  };
  const getFilteredData = (filters) => {
    let updatedData = [...products];
    let equipmentCategory = [];
    let clothesCategory = [];
    let glovesCategory = [];
    let dumbellsCategory = [];

    if (filters.categories.equipments) {
      equipmentCategory = filterByCategory(updatedData, "equipment");
    }
    if (filters.categories.clothes) {
      clothesCategory = filterByCategory(updatedData, "clothes");
    }
    if (filters.categories.handGloves) {
      glovesCategory = filterByCategory(updatedData, "gloves");
    }
    if (filters.categories.dumbells) {
      dumbellsCategory = filterByCategory(updatedData, "dumbells");
    }
    updatedData = [
      ...equipmentCategory,
      ...clothesCategory,
      ...glovesCategory,
      ...dumbellsCategory,
    ];
    if (!filters.includeOutOfStock) {
      updatedData = updatedData.filter((data) => data.inStock === true);
    }
    if (filters.fastDelivery) {
      updatedData = updatedData.filter((data) => data.fastDelivery === true);
    }
    updatedData = updatedData.filter(
      (data) => parseInt(data.rating, 10) >= parseInt(filters.rating, 10)
    );
    return updatedData;
  };
  let filteredData = getFilteredData(filters);
  let sortedData = getSortedData(filters, filteredData);

  useEffect(() => {
    (async () => {
      const { data, success, message } = await fetchProducts();
      if (success) {
        dispatchProducts({ type: "FETCH", payload: { products: data } });
      }
    })();
  }, []);

  useEffect(() => {
    console.log(products1.products);
  }, [products1]);

  return (
    <div className="products-container">
      <div className="spacer-1"></div>
      {sortedData?.map((product) => (
        <VerticalCard key={product?._id} product={product} />
      ))}
    </div>
  );
}

export default ProductListing;
