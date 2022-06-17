import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { useUser } from "../../Context/user-context";
import { useDocumentTitle } from "../../Util/change-document-title";
import AddressItem from "./AddressItem/AddressItem";
import { useAddresses } from "../../Context/address-context";
import { getAddresses } from "../../Util/getAddresses";
import { addToAddresses } from "../../Util/add-to-addresses";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import AddAddressModal from "../../Components/AddAddressModal/AddAddressModal";
import ReactDOM from "react-dom";
import "./address.css";

function Address() {
  const { user } = useUser();
  const { addresses, dispatchAddresses } = useAddresses();
  const navigate = useNavigate();
  const [isAddNewAddressButtonClick, setaddNewAddressButtonClick] =
    useState(true);

  useDocumentTitle("FiTbiT-Address");

  useEffect(() => {
    !user.isUserLoggedIn && navigate("/login");
  }, [user.isUserLoggedIn]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="spacer-3"></div>

      <section className="addresses">
        <h3 className="h2 centered-text address-heading">My Addresses</h3>
        <PrimaryButton
          buttonText="Add New Address"
          className="address-button"
        />
        <div className="spacer-3"></div>
        <div className="addresses-container">
          {addresses.map((address) => (
            <AddressItem userAddress={address} key={address._id} />
          ))}
        </div>
      </section>
      <div className="spacer-3"></div>
      {isAddNewAddressButtonClick &&
        ReactDOM.createPortal(
          <AddAddressModal />,
          document.getElementById("modal")
        )}
      <Footer />
    </div>
  );
}

export default Address;
