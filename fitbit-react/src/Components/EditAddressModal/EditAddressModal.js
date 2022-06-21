import React, { useState } from "react";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import { useToast } from "../../Context/toast-context";
import { useAddresses } from "../../Context/address-context";
import { AiOutlineClose } from "../../Assets/icons";
import "./edit-address-modal.css";

function EditAddressModal(props) {
  const { setEditButtonClick, userAddress } = props;
  const { name, mobile, pincode, address, city, state, _id } = userAddress;
  console.log(userAddress);
  const [formDetails, setFormDetails] = useState({
    name: name,
    mobile: mobile,
    pincode: pincode,
    address: address,
    city: city,
    state: state,
  });
  const closeModal = () => {
    // setaddNewAddressButtonClick(false);
  };
  const stopPropagation = (e) => {
    e.stopPropagation();
  };
  const handleEditAddressClick = () => {};

  return (
    <div className="edit-address-modal" onClick={closeModal}>
      <div className="edit-address-modal-container" onClick={stopPropagation}>
        <AiOutlineClose
          className="address-modal-close-icon"
          onClick={closeModal}
        />

        <form className="edit-address-form">
          <div className="edit-address-input-container">
            <label htmlFor="name" className="edit-address-modal-label">
              Name:
            </label>
            <input
              type="text"
              id="name"
              className="edit-address-modal-input"
              value={formDetails.name}
              placeholder="Name"
              onChange={(e) => handleFormChange(e)}
            />
          </div>

          <div className="edit-address-input-container">
            <label htmlFor="mobile" className="edit-address-modal-label">
              Mobile Number:
            </label>
            <input
              type="text"
              id="mobile"
              className="edit-address-modal-input"
              value={formDetails.mobile}
              placeholder="Mobile Number"
              onChange={(e) => handleFormChange(e)}
            />
          </div>

          <div className="edit-address-input-container">
            <label htmlFor="pincode" className="edit-address-modal-label">
              Pincode
            </label>
            <input
              type="text"
              id="pincode"
              className="edit-address-modal-input"
              value={formDetails.pincode}
              placeholder="Pincode"
              onChange={(e) => handleFormChange(e)}
            />
          </div>

          <div className="edit-address-input-container">
            <label htmlFor="address" className="edit-address-modal-label">
              Address
            </label>
            <input
              type="text"
              id="address"
              className="edit-address-modal-input"
              value={formDetails.address}
              placeholder="Address"
              onChange={(e) => handleFormChange(e)}
            />
          </div>

          <div className="edit-address-input-container">
            <label htmlFor="city" className="edit-address-modal-label">
              City
            </label>
            <input
              type="text"
              id="city"
              className="edit-address-modal-input"
              value={formDetails.city}
              placeholder="City"
              onChange={(e) => handleFormChange(e)}
            />
          </div>

          <div className="add-address-input-container">
            <label htmlFor="state" className="edit-address-modal-label">
              State
            </label>
            <input
              type="text"
              id="state"
              className="edit-address-modal-input"
              value={formDetails.state}
              placeholder="State"
              onChange={(e) => handleFormChange(e)}
            />
          </div>

          <PrimaryButton
            buttonText="Edit Address"
            className="add-address-button"
            onClick={handleEditAddressClick}
          />
        </form>
      </div>
    </div>
  );
}

export default EditAddressModal;
