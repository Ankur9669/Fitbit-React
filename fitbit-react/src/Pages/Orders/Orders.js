import React, { useEffect, useState } from "react";
import {
  Navbar,
  Footer,
  OrderSummaryCard,
  CheckoutProductCard,
  useDocumentTitle,
  getOrders,
  showToast,
  Link,
  PrimaryButton,
} from "./index";
import "./orders.css";

function Orders() {
  const [orders, setOrders] = useState([]);
  useDocumentTitle("FiTbiT-Orders");

  useEffect(() => {
    (async () => {
      const { data, success, message } = await getOrders();
      if (success) {
        setOrders(data);
      } else {
        showToast("Could not load orders", "ERROR");
      }
    })();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="spacer-3"></div>

      <section className="order">
        {orders.length > 0 ? (
          <>
            <h3 className="h2 centered-text">My Orders</h3>
            <div className="spacer-3"></div>
            <div className="orders-content-container grid-50-50">
              <div className="orders-summary-container">
                {orders.map((orderItem) => (
                  <OrderSummaryCard
                    key={orderItem._id}
                    address={orderItem.address}
                    totalPrice={orderItem.totalPrice}
                    orderId={orderItem.orderId}
                  />
                ))}
              </div>
              <div className="orders-container">
                {orders.map((orderItem) => (
                  <div key={orderItem.orderId}>
                    {orderItem.orders.map((order) => (
                      <CheckoutProductCard product={order} key={order._id} />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="empty-cart-container">
              <img
                src="/images/empty-cart.svg"
                className="empty-cart-img"
              ></img>
              <p className="weight-semi-bold font-large centered-text">
                No Orders Yet
              </p>
              <div className="spacer-1"></div>
              <p className="weight-normal font-medium centered-text">
                Buy Some Products Now!!!
              </p>
              <div className="spacer-1"></div>
              <Link to="/products">
                <PrimaryButton buttonText="Buy Products" />
              </Link>

              <div className="spacer-3"></div>
            </div>
          </>
        )}
      </section>
      <div className="spacer-3"></div>

      <Footer />
    </div>
  );
}

export default Orders;
