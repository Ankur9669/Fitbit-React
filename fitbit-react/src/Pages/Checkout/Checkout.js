import React, { useState } from "react";
import {
  Navbar,
  Footer,
  useDocumentTitle,
  SummaryCard,
  useCart,
  useAddresses,
  AddressItem,
  CheckoutProductCard,
  Link,
  useNavigate,
  PrimaryButton,
  SecondaryButton,
  useUser,
  AddAddressModal,
  ReactDOM,
} from "./index";
import "./checkout.css";

function Checkout() {
  useDocumentTitle("FiTbiT-Checkout");

  const { user } = useUser();
  const { cart } = useCart();
  const { addresses } = useAddresses();
  const [isAddNewAddressButtonClick, setaddNewAddressButtonClick] =
    useState(false);

  return (
    <div>
      <Navbar />
      <div className="spacer-3"></div>
      <main className="checkout">
        <>
          <h3 className="h2 centered-text">Checkout</h3>
          {cart.length > 0 ? (
            <div className="checkout-container grid-50-50">
              <div className="checkout-items-container">
                <div className="checkout-orders-container">
                  <h3 className="font-medium-large">Order Summary</h3>
                  {cart.map((product) => (
                    <CheckoutProductCard product={product} key={product._id} />
                  ))}
                </div>

                <div className="checkout-address-container">
                  <h3 className="font-medium-large">Delivery Address</h3>
                  {addresses.map((address) => (
                    <AddressItem userAddress={address} key={address._id} />
                  ))}
                  <SecondaryButton
                    buttonText="Add New Address"
                    onClick={() => setaddNewAddressButtonClick(true)}
                  />
                </div>
              </div>
              <div className="checkout-summary-container">
                <SummaryCard />
              </div>
            </div>
          ) : (
            <div className="empty-cart-container">
              <img
                src="/images/empty-cart.svg"
                className="empty-cart-img"
              ></img>
              <p className="weight-semi-bold font-large centered-text">
                Your Cart is Empty
              </p>
              <div className="spacer-1"></div>
              <p className="weight-normal font-medium centered-text">
                Add Some Items Now
              </p>
              <div className="spacer-1"></div>
              <Link to="/products">
                <PrimaryButton buttonText="Add Items" />
              </Link>

              <div className="spacer-3"></div>
            </div>
          )}
        </>
      </main>
      {isAddNewAddressButtonClick &&
        ReactDOM.createPortal(
          <AddAddressModal
            setaddNewAddressButtonClick={setaddNewAddressButtonClick}
            modalType="addAddress"
          />,
          document.getElementById("modal")
        )}
      <Footer />
    </div>
  );
}

export default Checkout;
