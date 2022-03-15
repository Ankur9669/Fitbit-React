import React from "react";
import {
  VerticalCard,
  products,
  useFilter,
  filterByCategory,
  sortByHighToLow,
  sortByLowToHigh,
} from "../index";

function ProductListing() {
  const { filters, dispatch } = useFilter();

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
  return (
    <div className="products-container">
      <div className="spacer-1"></div>
      {sortedData?.map(
        ({
          productId,
          productTitle,
          discountedPrice,
          discountPercent,
          realPrice,
          productImageUrl,
          category,
          rating,
          inStock,
          fastDelivery,
        }) => (
          <VerticalCard
            key={productId}
            productId={productId}
            productTitle={productTitle}
            discountedPrice={discountedPrice}
            realPrice={realPrice}
            discountPercent={discountPercent}
            productImageUrl={productImageUrl}
            category={category}
            inStock={inStock}
            rating={rating}
            fastDelivery={fastDelivery}
          />
        )
      )}
    </div>
  );
}

export default ProductListing;
