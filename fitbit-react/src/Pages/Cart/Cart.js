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
import { PrimaryButton } from "./HorizontalCard";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, dispatch } = useCart();
  // console.log(cart);
  return (
    <div>
      <Navbar />
      <div className="spacer-3"></div>
      <main className="mycart">
        {cart.length > 0 ? (
          <>
            <h3 className="h2 centered-text">My Cart</h3>
            <div className="spacer-3"></div>
            <div className="mycart-container grid-50-50">
              <div className="mycart-items-container">
                {cart?.map((cartProduct) => {
                  return (
                    <HorizontalCard
                      product={cartProduct}
                      key={cartProduct._id}
                    />
                  );
                })}
              </div>
              <div className="mycart-summary-container">
                <SummaryCard />
              </div>
            </div>
          </>
        ) : (
          <div className="empty-cart-container">
            <img src="/images/empty-cart.svg" className="empty-cart-img"></img>
            <p className="weight-semi-bold font-large">Your Cart is Empty</p>
            <div className="spacer-1"></div>
            <p className="weight-normal font-medium">Add Some Items Now</p>
            <div className="spacer-1"></div>
            <Link to="/products">
              <PrimaryButton buttonText="Add Items" />
            </Link>

            <div className="spacer-3"></div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default Cart;
