import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import VerticalCard from "../../Components/VerticalCard/VerticalCard";
import Sidebar from "./Sidebar/Sidebar";
import { products } from "../../Temp/products";
import { useFilter } from "../../Context/filter-context";
import { useProduct } from "../../Context/products-context";
import { filterByCategory } from "../../Util/filter";
import { sortByLowToHigh, sortByHighToLow } from "../../Util/sort";
export {
  Navbar,
  Footer,
  VerticalCard,
  Sidebar,
  products,
  useFilter,
  useProduct,
  filterByCategory,
  sortByHighToLow,
  sortByLowToHigh,
};
