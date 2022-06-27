import React, { useState } from "react";
import {
  PrimaryButton,
  useToast,
  useAddresses,
  AiOutlineClose,
  editAddresses,
} from "./index";
import "./edit-address-modal.css";

function EditAddressModal(props) {
  const { setEditButtonClick, userAddress } = props;
  const { showToast } = useToast();
  const { name, mobile, pincode, address, city, state, _id } = userAddress;
  const [formDetails, setFormDetails] = useState({
    name: name,
    mobile: mobile,
    pincode: pincode,
    address: address,
    city: city,
    state: state,
  });
  const { dispatchAddresses } = useAddresses();
  const [isEditAddressLoading, setEditAddressLoading] = useState(false);

  const closeModal = () => {
    setEditButtonClick(false);
  };
  const stopPropagation = (e) => {
    e.stopPropagation();
  };
  const handleFormChange = (e) => {
    setFormDetails({
      ...formDetails,
      [e.target.id]: e.target.value,
    });
  };
  const handleEditAddressClick = async (e) => {
    e.preventDefault();

    if (!isEditAddressLoading) {
      setEditAddressLoading(true);
      const { data, success, message } = await editAddresses(_id, formDetails);
      if (success) {
        dispatchAddresses({ type: "SET_ADDRESSES", payload: { value: data } });
        setEditButtonClick(false);
        showToast("Address edited successfully", "SUCCESS");
      } else {
        showToast("Error in editing address", "ERROR");
      }
      setEditAddressLoading(false);
    }
  };

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
            isLoading={isEditAddressLoading}
          />
        </form>
      </div>
    </div>
  );
}

export default EditAddressModal;
