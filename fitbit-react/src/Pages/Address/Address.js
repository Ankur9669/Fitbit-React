import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { useUser } from "../../Context/user-context";
import { useDocumentTitle } from "../../Util/change-document-title";
import AddressItem from "./AddressItem/AddressItem";
import { useAddresses } from "../../Context/address-context";
import "./address.css";

function Address() {
  const { user } = useUser();
  const { addresses, dispatchAddresses } = useAddresses();
  const navigate = useNavigate();

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
        <h3 className="h2 centered-text">My Addresses</h3>
        <div className="spacer-3"></div>
        <div className="addresses-container">
          {addresses.map((address) => (
            <AddressItem userAddress={address} key={address._id} />
          ))}
        </div>
      </section>
      <div className="spacer-3"></div>
      <Footer />
    </div>
  );
}

export default Address;
