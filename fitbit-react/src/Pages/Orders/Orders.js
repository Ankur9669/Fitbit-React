import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./orders.css";
import OrderSummaryCard from "../../Components/OrderSummaryCard/OrderSummaryCard";
import CheckoutProductCard from "../Checkout/CheckoutProductCard/CheckoutProductCard";
import { useDocumentTitle } from "../../Util/change-document-title";

function Orders() {
  const product = {
    _id: "asdasdas",
    productTitle: "ASnnasd",
    discountedPrice: 12312,
    realPrice: 2123,
    discountPercent: 21,
    productImageUrl:
      "	https://cdn.shopify.com/s/files/1/0610/2882/7370/products/product39.jpg?v=1636692074",
    category: "",
    rating: 4,
    inStock: true,
    fastDelivery: "",
    qty: 2,
  };
  useDocumentTitle("FiTbiT-Orders");

  return (
    <div>
      <Navbar />
      <div className="spacer-3"></div>

      <section className="order">
        <h3 className="h2 centered-text">My Orders</h3>
        <div className="spacer-3"></div>
        <div className="orders-content-container grid-50-50">
          <div className="orders-summary-container">
            <OrderSummaryCard />
            <OrderSummaryCard />
          </div>
          <div className="orders-container">
            <CheckoutProductCard product={product} />
            <CheckoutProductCard product={product} />
            <CheckoutProductCard product={product} />
          </div>
        </div>
      </section>
      <div className="spacer-3"></div>

      <Footer />
    </div>
  );
}

export default Orders;
