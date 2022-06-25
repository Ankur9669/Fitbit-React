import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./orders.css";

function Orders() {
  return (
    <div>
      <Navbar />
      <div className="spacer-3"></div>

      <section className="order">
        <h3 className="h2 centered-text">My Orders</h3>
        <div className="spacer-3"></div>
        <div className="orders-content-container grid-50-50">
          <div className="orders-summary-container">sasd</div>
          <div className="orders-container">sdasd</div>
        </div>
      </section>
      <div className="spacer-3"></div>
      <Footer />
    </div>
  );
}

export default Orders;
