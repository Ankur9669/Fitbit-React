import React from "react";
import {
  GrEdit,
  RiDeleteBin6Fill,
  MdModeEditOutline,
} from "../../../Assets/icons";
import "./addressitem.css";

function AddressItem(props) {
  const { userAddress } = props;
  const { name, mobile, pincode, address, city, state } = userAddress;
  return (
    <div className="address-item">
      <div className="address-item-icons">
        <MdModeEditOutline className="address-item-edit-icon address-item-icon" />
        <RiDeleteBin6Fill className="address-item-delete-icon address-item-icon" />
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
    </div>
  );
}

export default AddressItem;
