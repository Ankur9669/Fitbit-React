import React, { useState } from "react";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import { addToAddresses } from "../../Util/add-to-addresses";
import { useToast } from "../../Context/toast-context";
import { useAddresses } from "../../Context/address-context";
import "./add-address-modal.css";

function AddAddressModal(props) {
  const { setaddNewAddressButtonClick } = props;
  const { showToast } = useToast();
  const { dispatchAddresses } = useAddresses();
  const [formDetails, setFormDetails] = useState({
    fullName: "",
    mobile: "",
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
  const handleAddAddressClick = async (e) => {
    e.preventDefault();
    const { data, success, message } = await addToAddresses(formDetails);
    if (success) {
      dispatchAddresses({ type: "SET_ADDRESSES", payload: { value: data } });
      setaddNewAddressButtonClick(false);
      showToast("Address Added Successfully", "SUCCESS");
    } else {
      showToast("Error in adding address", "ERROR");
    }
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
            <label htmlFor="mobile" className="add-address-modal-label">
              Mobile Number:
            </label>
            <input
              type="text"
              id="mobile"
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
