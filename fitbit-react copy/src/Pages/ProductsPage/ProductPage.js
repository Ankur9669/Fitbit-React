import React from "react";
import "./productpage.css";
import { Navbar, Footer, Sidebar } from "./index";
import ProductListing from "./ProductListing/ProductListing";
import { useDocumentTitle } from "../../Util/change-document-title";

function ProductPage() {
  useDocumentTitle("FiTbiT-Products");
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
