import React, { useEffect, useState } from "react";
import {
  useNavigate,
  Navbar,
  Footer,
  useUser,
  useDocumentTitle,
  AddressItem,
  useAddresses,
  PrimaryButton,
  AddAddressModal,
  ReactDOM,
} from "./index";
import "./address.css";

function Address() {
  const { user } = useUser();
  const { addresses, dispatchAddresses } = useAddresses();
  const navigate = useNavigate();
  const [isAddNewAddressButtonClick, setaddNewAddressButtonClick] =
    useState(false);

  useDocumentTitle("FiTbiT-Address");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="spacer-3"></div>

      <section className="addresses">
        {addresses.length > 0 && (
          <h3 className="h2 centered-text address-heading">My Addresses</h3>
        )}
        <PrimaryButton
          buttonText="Add New Address"
          className="address-button"
          onClick={() => setaddNewAddressButtonClick(true)}
        />
        <div className="spacer-3"></div>
        <div className="addresses-container">
          {addresses.length > 0 ? (
            addresses.map((address) => (
              <AddressItem userAddress={address} key={address._id} />
            ))
          ) : (
            <div className="empty-cart-container">
              <img
                src="/images/empty-cart.svg"
                className="empty-cart-img"
              ></img>
              <p className="weight-semi-bold font-large centered-text">
                Your Don't Have Any addresses
              </p>
              <div className="spacer-3"></div>
            </div>
          )}
        </div>
      </section>
      <div className="spacer-3"></div>
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

export default Address;
