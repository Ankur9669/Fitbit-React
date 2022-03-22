import Axios from "axios";
const fetchProducts = async () => {
  try {
    const response = await Axios.get("api/products");
    const products = response?.data?.products;

    // console.log(products);
    return {
      data: products,
      success: true,
      message: "Data Fetched Successfully",
    };
  } catch (e) {
    return {
      data: "",
      success: false,
      message: `Error: ${e}`,
    };
  }
};

export { fetchProducts };
