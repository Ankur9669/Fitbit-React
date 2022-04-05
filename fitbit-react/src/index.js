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
<<<<<<< HEAD
import { WishListProvider } from "./Context/wishlist-context";
import { ToastProvider } from "./Context/toast-context";
=======
>>>>>>> parent of b460ecf (Wish list functionality (#14))

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
<<<<<<< HEAD
      <ToastProvider>
        <UserProvider>
          <ProductProvider>
            <FilterProvider>
              <WishListProvider>
                <CartProvider>
                  <App />
                </CartProvider>
              </WishListProvider>
            </FilterProvider>
          </ProductProvider>
        </UserProvider>
      </ToastProvider>
=======
      <UserProvider>
        <ProductProvider>
          <FilterProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </FilterProvider>
        </ProductProvider>
      </UserProvider>
>>>>>>> parent of b460ecf (Wish list functionality (#14))
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
