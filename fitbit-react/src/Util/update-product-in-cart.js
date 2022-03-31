import Axios from "axios";

const updateProductCountInCart = async (productId, type) => {
  const token = localStorage.getItem("token");
  try {
    const response = await Axios.post(
      `/api/user/cart/${productId}`,
      {
        action: {
          type: type,
        },
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
      message: "Item Updated",
    };
  } catch (e) {
    return {
      data: response.data,
      success: false,
      message: `Error ${e}`,
    };
  }
};
export { updateProductCountInCart };
