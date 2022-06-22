import React from "react";
import { PrimaryButton } from "../../../Components/Navbar";
import { useCart } from "../../../Context/cart-context";
import { Link, useLocation } from "react-router-dom";

function SummaryCard() {
  const { cart, dispatch, totalPrice } = useCart();
  const discountPrice = 180;
  const deliveryCharges = 40;
  const priceToPay = totalPrice - discountPrice + deliveryCharges;
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className="card card-vertical price-details-card">
      <div className="wrapper">
        <div className="text-container">
          <h5 className="font-medium-large weight-semi-bold primary-text-color price-details-card-heading margin-vertical-sm">
            Price Details
          </h5>
          <div className="price-details-section">
            <div className="font-medium weight-normal primary-text-color price-details-item margin-vertical-sm">
              <span>Price ({`${cart.length} items`})</span>
              <span>&#8377;{totalPrice}</span>
            </div>
            <div className="font-medium weight-normal primary-text-color price-details-item margin-vertical-sm">
              <span>Discount</span>
              <span>-&#8377;{discountPrice}</span>
            </div>
            <div className="font-medium weight-normal primary-text-color price-details-item margin-vertical-sm">
              <span>Delivery Charges</span>
              <span>&#8377;{deliveryCharges}</span>
            </div>
          </div>
          <div className="price-details-section">
            <div className="font-medium weight-semi-bold primary-text-color price-details-item margin-vertical-sm">
              <span>TOTAL AMOUNT</span>
              <span>&#8377;{priceToPay}</span>
            </div>
          </div>
          <div className="price-details-section">
            <p className="font-medium weight-semi-bold primary-text-color price-details-item margin-vertical-sm">
              You will save ₹1999 on this order
            </p>
          </div>
        </div>

        {pathname === "/checkout" ? (
          <div className="btn-container">
            <PrimaryButton buttonText={"Pay Now"} />
          </div>
        ) : (
          <Link to="/checkout" className="btn-container">
            <PrimaryButton buttonText={"Checkout"} />
          </Link>
        )}
      </div>
    </div>
  );
}

export default SummaryCard;
