import React from "react";
import "./productpage.css";
import { Navbar, Footer, Sidebar } from "./index";

import ProductListing from "./ProductListing/ProductListing";

function ProductPage() {
  return (
    <div>
      <Navbar />
      <section className="products-section">
        <Sidebar />
        <ProductListing />
      </section>
      <div className="spacer-3"></div>
      <Footer />
    </div>
  );
}

export default ProductPage;
