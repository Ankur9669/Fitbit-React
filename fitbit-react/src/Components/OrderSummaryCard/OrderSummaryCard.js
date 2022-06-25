import React from "react";
import "./ordersummarycard.css";

function OrderSummaryCard() {
  return (
    <div className="order-summary-card">
      <div className="order-summary-item">
        <p className="font-medium weight-bold order-summary-item-title">
          Order No:{" "}
        </p>
        <p className="font-medium weight-normal order-summary-item-detail">
          0bfbaa76-8739-443
        </p>
      </div>

      <div className="order-summary-item">
        <p className="font-medium weight-bold order-summary-item-title">
          Order Total:{" "}
        </p>
        <p className="font-medium weight-normal order-summary-item-detail">
          &#8377;2131
        </p>
      </div>

      <div className="order-summary-address">
        <p className="font-medium weight-bold order-summary-item-title">
          Ship to:{" "}
        </p>
        <p className="font-medium weight-normal">Jane Doe</p>
        <p className="font-medium weight-normal">
          National Highway 8, Rangpuri
        </p>
        <p className="font-medium weight-normal">
          Bengaluru, Karnataka, 110037
        </p>
        <p className="font-medium weight-normal">7598170706</p>
      </div>
    </div>
  );
}

export default OrderSummaryCard;
