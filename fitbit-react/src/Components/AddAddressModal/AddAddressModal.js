import React, { useState } from "react";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import "./add-address-modal.css";

function AddAddressModal() {
  const [formDetails, setFormDetails] = useState({
    fullName: "",
    mobileNumber: "",
    pincode: "",
    address: "",
    city: "",
    state: "",
  });
  const stopPropagation = (e) => {
    e.stopPropagation();
  };
  const handleFormChange = (e) => {
    setFormDetails({
      ...formDetails,
      [e.target.id]: e.target.value,
    });
  };
  const handleAddAddressClick = (e) => {
    e.preventDefault();
  };
  return (
    <div
      className="add-address-modal"
      // onClick={closeModal}
    >
      <div className="add-address-modal-container" onClick={stopPropagation}>
        <form className="add-address-form">
          <div className="add-address-input-container">
            <label htmlFor="name" className="add-address-modal-label">
              Name:
            </label>
            <input
              type="text"
              id="name"
              className="add-address-modal-input"
              value={formDetails.name}
              placeholder="Name"
              onChange={(e) => handleFormChange(e)}
            />
          </div>

          <div className="add-address-input-container">
            <label htmlFor="mobileNumber" className="add-address-modal-label">
              Mobile Number:
            </label>
            <input
              type="text"
              id="mobileNumber"
              className="add-address-modal-input"
              value={formDetails.mobileNumber}
              placeholder="Mobile Number"
              onChange={(e) => handleFormChange(e)}
            />
          </div>

          <div className="add-address-input-container">
            <label htmlFor="pincode" className="add-address-modal-label">
              Pincode
            </label>
            <input
              type="text"
              id="pincode"
              className="add-address-modal-input"
              value={formDetails.pincode}
              placeholder="Pincode"
              onChange={(e) => handleFormChange(e)}
            />
          </div>

          <div className="add-address-input-container">
            <label htmlFor="address" className="add-address-modal-label">
              Address
            </label>
            <input
              type="text"
              id="address"
              className="add-address-modal-input"
              value={formDetails.address}
              placeholder="Address"
              onChange={(e) => handleFormChange(e)}
            />
          </div>

          <div className="add-address-input-container">
            <label htmlFor="city" className="add-address-modal-label">
              City
            </label>
            <input
              type="text"
              id="city"
              className="add-address-modal-input"
              value={formDetails.city}
              placeholder="City"
              onChange={(e) => handleFormChange(e)}
            />
          </div>

          <div className="add-address-input-container">
            <label htmlFor="state" className="add-address-modal-label">
              State
            </label>
            <input
              type="text"
              id="state"
              className="add-address-modal-input"
              value={formDetails.state}
              placeholder="State"
              onChange={(e) => handleFormChange(e)}
            />
          </div>

          <PrimaryButton
            buttonText="Add Address"
            className="add-address-button"
            onClick={handleAddAddressClick}
          />
        </form>
      </div>
    </div>
  );
}

export default AddAddressModal;
