import Axios from "axios";

const addToCart = async (product) => {
  const token = localStorage.getItem("token");
  try {
    const response = await Axios.post(
      "/api/user/cart",
      {
        product,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    return {
      data: response.data,
      success: true,
      message: "Item Added To Cart",
    };
  } catch (e) {
    //TODO Implement Toast
    return {
      data: "",
      success: false,
      message: "Could'nt Add Item",
    };
  }
  return [];
};

export { addToCart };
