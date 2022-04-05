import React from "react";
import VerticalCard from "../../Components/VerticalCard/VerticalCard";
import { wishListProducts } from "../../Temp/wishlist-products";
import { Navbar, Footer, AiFillHeart } from "./index";
import "./wishlist.css";
function WishList() {
  return (
    <div>
      <Navbar />
      <div className="spacer-3"></div>
      <section class="wishlist-products">
        <h3 class="h2 centered-text">My WishList</h3>
        <div class="spacer-3"></div>
        <div class="wishlist-products-container">
          {wishListProducts.map((wishListProduct) => {
            return (
              <VerticalCard
                key={wishListProduct?._id}
                product={wishListProduct}
              />
            );
          })}
        </div>
      </section>
      <div className="spacer-3"></div>
      <Footer />
    </div>
  );
}

export default WishList;
