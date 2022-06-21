import React, { useState } from "react";
import {
  RiDeleteBin6Fill,
  MdModeEditOutline,
  removeFromAddresses,
  editAddress,
  useToast,
  useAddresses,
  EditAddressModal,
  ReactDOM,
} from "./index";
import "./addressitem.css";

function AddressItem(props) {
  const { userAddress } = props;
  const { name, mobile, pincode, address, city, state, _id } = userAddress;
  const { showToast } = useToast();
  const { dispatchAddresses } = useAddresses();
  const [isEditButtonClick, setEditButtonClick] = useState(false);

  const handleDeleteIconClick = async () => {
    const { data, success, message } = await removeFromAddresses(_id);
    if (success) {
      dispatchAddresses({ type: "SET_ADDRESSES", payload: { value: data } });
      showToast("Address removed Successfully", "SUCCESS");
    } else {
      showToast(message, "ERROR");
    }
  };
  const handleEditIconClick = async () => {
    setEditButtonClick(true);
  };

  return (
    <div className="address-item">
      <div className="address-item-icons">
        <MdModeEditOutline
          className="address-item-edit-icon address-item-icon"
          onClick={handleEditIconClick}
        />
        <RiDeleteBin6Fill
          className="address-item-delete-icon address-item-icon"
          onClick={handleDeleteIconClick}
        />
      </div>
      <div className="address-item-content">
        <p className="address-item-content-col-1 font-medium-large weight-bold">
          Full Name:
        </p>
        <p className="address-item-content-col-2 font-medium-large">{name}</p>
      </div>

      <div className="address-item-content">
        <p className="address-item-content-col-1 font-medium-large weight-bold">
          Mobile:
        </p>
        <p className="address-item-content-col-2 font-medium-large">{mobile}</p>
      </div>

      <div className="address-item-content">
        <p className="address-item-content-col-1 font-medium-large weight-bold">
          Pincode:
        </p>
        <p className="address-item-content-col-2 font-medium-large">
          {pincode}
        </p>
      </div>

      <div className="address-item-content">
        <p className="address-item-content-col-1 font-medium-large weight-bold">
          Address:
        </p>
        <p className="address-item-content-col-2 font-medium-large">
          {address}
        </p>
      </div>

      <div className="address-item-content">
        <p className="address-item-content-col-1 font-medium-large weight-bold">
          City:
        </p>
        <p className="address-item-content-col-2 font-medium-large">{city}</p>
      </div>
      <div className="address-item-content">
        <p className="address-item-content-col-1 font-medium-large weight-bold">
          State:
        </p>
        <p className="address-item-content-col-2 font-medium-large">{state}</p>
      </div>
      {isEditButtonClick &&
        ReactDOM.createPortal(
          <EditAddressModal
            setEditButtonClick={setEditButtonClick}
            userAddress={userAddress}
          />,
          document.getElementById("modal")
        )}
    </div>
  );
}

export default AddressItem;
