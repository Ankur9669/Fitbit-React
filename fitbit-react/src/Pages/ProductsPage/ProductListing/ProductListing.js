import React from "react";
import { VerticalCard } from "../index";
import { products } from "../../../Temp/products";
import { useProduct } from "../../../Context/products-context";
import { useFilter } from "../../../Context/filter-context";
import { useEffect } from "react";
function ProductListing() {
  const { filters, dispatch } = useFilter();

  useEffect(() => {
    console.log(filters);
  }, [filters]);
  const getSortedData = (state) => {
    // console.log(state);
    let updatedData = [...products];
    if (state.sortBy === "highToLow") {
      updatedData.sort((a, b) => b.discountedPrice - a.discountedPrice);
    } else if (state.sortBy === "lowToHigh") {
      updatedData.sort((a, b) => a.discountedPrice - b.discountedPrice);
    }
    return updatedData;
  };
  const getFilteredData = (filters, sortedData) => {
    let updatedData = [...sortedData];
    let equipmentCategory = [];
    let clothesCategory = [];
    let glovesCategory = [];
    let dumbellsCaegory = [];
    if (filters.categories.equipments) {
      equipmentCategory = updatedData.filter(
        (data) => data.category === "equipment"
      );
    }
    if (filters.categories.clothes) {
      clothesCategory = updatedData.filter(
        (data) => data.category === "clothes"
      );
    }
    if (filters.categories.handGloves) {
      glovesCategory = updatedData.filter((data) => data.category === "gloves");
    }
    if (filters.categories.clothes) {
      dumbellsCaegory = updatedData.filter(
        (data) => data.category === "dumbells"
      );
    }
    return [
      ...equipmentCategory,
      ...clothesCategory,
      ...glovesCategory,
      ...dumbellsCaegory,
    ];
  };
  let sortedData = getSortedData(filters);
  let filteredData = getFilteredData(filters, sortedData);
  return (
    <div className="products-container">
      <div className="spacer-1"></div>
      {filteredData?.map(
        ({
          productId,
          productTitle,
          discountedPrice,
          discountPercent,
          realPrice,
          productImageUrl,
        }) => (
          <VerticalCard
            key={productId}
            productId={productId}
            productTitle={productTitle}
            discountedPrice={discountedPrice}
            realPrice={realPrice}
            discountPercent={discountPercent}
            productImageUrl={productImageUrl}
          />
        )
      )}
    </div>
  );
}

export default ProductListing;
