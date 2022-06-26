import React from "react";
import "./ordersummarycard.css";

function OrderSummaryCard(props) {
  const { address, totalPrice, orderId } = props;

  return (
    <div className="order-summary-card">
      <div className="order-summary-item">
        <p className="font-medium weight-bold order-summary-item-title">
          Order No:{" "}
        </p>
        <p className="font-medium weight-normal order-summary-item-detail">
          {orderId}
        </p>
      </div>

      <div className="order-summary-item">
        <p className="font-medium weight-bold order-summary-item-title">
          Order Total:{" "}
        </p>
        <p className="font-medium weight-normal order-summary-item-detail">
          &#8377;{totalPrice}
        </p>
      </div>

      <div className="order-summary-address">
        <p className="font-medium weight-bold order-summary-item-title">
          Ship to:{" "}
        </p>
        <p className="font-medium weight-normal">{address.name}</p>
        <p className="font-medium weight-normal">{address.address}</p>
        <p className="font-medium weight-normal">
          {`${address.city}, ${address.state}, ${address.pincode}`}
        </p>
        <p className="font-medium weight-normal">{address.mobile}</p>
      </div>
    </div>
  );
}

export default OrderSummaryCard;
