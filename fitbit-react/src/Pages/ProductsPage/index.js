import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import VerticalCard from "../../Components/VerticalCard/VerticalCard";
import Sidebar from "./Sidebar/Sidebar";
import { products } from "../../Temp/products";
import { useFilter } from "../../Context/filter-context";
import { useProduct } from "../../Context/products-context";
import { filterByCategory } from "../../Util/filter";
import { sortByLowToHigh, sortByHighToLow } from "../../Util/sort";
import { useToast } from "../../Context/toast-context";
import { v4 as uuid } from "uuid";
export {
  Navbar,
  Footer,
  VerticalCard,
  Sidebar,
  products,
  useFilter,
  useProduct,
  useToast,
  uuid,
  filterByCategory,
  sortByHighToLow,
  sortByLowToHigh,
};
