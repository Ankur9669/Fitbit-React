import React from "react";
import {
  Navbar,
  Footer,
  HorizontalCard,
  cartProducts,
  SummaryCard,
  useCart,
} from "./index";
import "./cart.css";

function Cart() {
  const { cart, dispatch } = useCart();
  // console.log(cart);
  return (
    <div>
      <Navbar />
      <div className="spacer-3"></div>
      <main className="mycart">
        <h3 className="h2 centered-text">My Cart</h3>
        <div className="spacer-3"></div>
        <div className="mycart-container grid-50-50">
          <div className="mycart-items-container">
            {cart?.map((cartProduct) => {
              return (
                <HorizontalCard product={cartProduct} key={cartProduct._id} />
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
