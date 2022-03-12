import React from "react";
import { VerticalCard, products } from "../index";

function ProductListing() {
  return (
    <div className="products-container">
      <div className="spacer-1"></div>
      {products?.map(
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
