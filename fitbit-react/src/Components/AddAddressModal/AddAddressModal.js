import React, { useState } from "react";
import {
  PrimaryButton,
  addToAddresses,
  useToast,
  useAddresses,
  AiOutlineClose,
} from "./index";
import "./add-address-modal.css";

function AddAddressModal(props) {
  const { setaddNewAddressButtonClick } = props;
  const { showToast } = useToast();
  const { dispatchAddresses } = useAddresses();

  const [formDetails, setFormDetails] = useState({
    name: "",
    mobile: "",
    pincode: "",
    address: "",
    city: "",
    state: "",
  });
  const [isDummyAddressVisible, setDummyAddressVisible] = useState(true);
  const [isAddAddressLoading, setAddAddressLoading] = useState(false);

  const handleFormChange = (e) => {
    setFormDetails({
      ...formDetails,
      [e.target.id]: e.target.value,
    });
  };
  const handleAddAddressClick = async (e) => {
    e.preventDefault();
    const isAddressValid = validateAddress();
    if (isAddressValid === false) {
      return;
    }
    if (!isAddAddressLoading) {
      setAddAddressLoading(true);
      const { data, success, message } = await addToAddresses(formDetails);
      if (success) {
        dispatchAddresses({ type: "SET_ADDRESSES", payload: { value: data } });
        setaddNewAddressButtonClick(false);
        showToast("Address Added Successfully", "SUCCESS");
      } else {
        showToast("Error in adding address", "ERROR");
      }
      setAddAddressLoading(false);
    }
  };
  const handleAddDummyAddressClick = async (e) => {
    e.preventDefault();
    setFormDetails({
      name: "Ankur Gupta",
      mobile: "9109559718",
      pincode: "482001",
      address: "National Highway 8, Rangpuri",
      city: "Bengaluru",
      state: "Karnataka",
    });
    setDummyAddressVisible(false);
  };
  const validateAddress = () => {
    if (
      formDetails.name == "" ||
      formDetails.mobile == "" ||
      formDetails.pincode == "" ||
      formDetails.address == "" ||
      formDetails.city == "" ||
      formDetails.state == ""
    ) {
      showToast("Please Enter all details first", "ERROR");
      return false;
    }
    return true;
  };
  const closeModal = () => {
    setaddNewAddressButtonClick(false);
  };
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="add-address-modal" onClick={closeModal}>
      <div className="add-address-modal-container" onClick={stopPropagation}>
        <AiOutlineClose
          className="address-modal-close-icon"
          onClick={closeModal}
        />

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
              required
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
              value={formDetails.mobile}
              placeholder="Mobile Number"
              onChange={(e) => handleFormChange(e)}
              required
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
              required
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
              required
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
              required
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
              required
            />
          </div>

          <div className="add-address-modal-button-container">
            {isDummyAddressVisible && (
              <PrimaryButton
                buttonText="Add Dummy Address"
                onClick={handleAddDummyAddressClick}
                className="address-modal-button"
              />
            )}

            <PrimaryButton
              className="address-modal-button"
              onClick={handleAddAddressClick}
              buttonText={"Add Address"}
              isLoading={isAddAddressLoading}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddAddressModal;
