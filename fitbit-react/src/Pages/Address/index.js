import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { useUser } from "../../Context/user-context";
import { useDocumentTitle } from "../../Util/change-document-title";
import AddressItem from "./AddressItem/AddressItem";
import { useAddresses } from "../../Context/address-context";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import AddAddressModal from "../../Components/AddAddressModal/AddAddressModal";
import ReactDOM from "react-dom";

export {
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
};
