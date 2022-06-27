import React from "react";
import { ThreeDots } from "react-loader-spinner";
import {
  VerticalCard,
  useFilter,
  useProduct,
  filterByCategory,
  sortByHighToLow,
  sortByLowToHigh,
} from "../index";

function ProductListing() {
  const { filters, dispatch } = useFilter();
  const {
    products,
    dispatch: dispatchProducts,
    areProductsLoading,
    searchProductString,
  } = useProduct();

  const getSortedData = (state, filteredData) => {
    let updatedData = [...filteredData];
    if (state.sortBy === "highToLow") {
      sortByHighToLow(updatedData);
    } else if (state.sortBy === "lowToHigh") {
      sortByLowToHigh(updatedData);
    }
    return updatedData.filter((product) =>
      product.productTitle
        .toLowerCase()
        .includes(searchProductString.toLowerCase())
    );
  };
  const getFilteredData = (filters) => {
    let updatedData = products.products;
    let equipmentCategory = [];
    let clothesCategory = [];
    let glovesCategory = [];
    let dumbellsCategory = [];

    if (!filters.categories.all) {
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
    }

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
  let filteredData = products.products && getFilteredData(filters);
  let sortedData = products.products && getSortedData(filters, filteredData);

  return (
    <div className="products-container">
      <div className="spacer-1"></div>
      {areProductsLoading ? (
        <ThreeDots color="#2d3092" height={"100px"} width={"100px"} />
      ) : (
        sortedData?.map((product) => (
          <VerticalCard key={product?._id} product={product} />
        ))
      )}
    </div>
  );
}

export default ProductListing;
