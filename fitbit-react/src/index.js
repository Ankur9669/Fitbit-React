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

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <ProductProvider>
          <FilterProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </FilterProvider>
        </ProductProvider>
      </UserProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
