import React from "react";
import {
  Navbar,
  Footer,
  HorizontalCard,
  cartProducts,
  SummaryCard,
} from "./index";
import "./cart.css";

function Cart() {
  return (
    <div>
      <Navbar />
      <div className="spacer-3"></div>
      <main className="mycart">
        <h3 className="h2 centered-text">My Cart</h3>
        <div className="spacer-3"></div>
        <div className="mycart-container grid-50-50">
          <div className="mycart-items-container">
            {cartProducts.map((cartProduct) => {
              return (
                <HorizontalCard
                  product={cartProduct}
                  key={cartProduct.productId}
                />
              );
            })}
          </div>
          <div className="mycart-summary-container">
            <SummaryCard />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Cart;