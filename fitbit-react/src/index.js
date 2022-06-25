import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { makeServer } from "./server";
import { CartProvider } from "./Context/cart-context";
import { FilterProvider } from "./Context/filter-context";
import { ProductProvider } from "./Context/products-context";
import { UserProvider } from "./Context/user-context";
import { WishListProvider } from "./Context/wishlist-context";
import { AddressProvider } from "./Context/address-context";
import { ToastProvider } from "./Context/toast-context.js";
import { CheckoutProvider } from "./Context/checkout-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CheckoutProvider>
        <ToastProvider>
          <UserProvider>
            <ProductProvider>
              <FilterProvider>
                <WishListProvider>
                  <AddressProvider>
                    <CartProvider>
                      <App />
                    </CartProvider>
                  </AddressProvider>
                </WishListProvider>
              </FilterProvider>
            </ProductProvider>
          </UserProvider>
        </ToastProvider>
      </CheckoutProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
