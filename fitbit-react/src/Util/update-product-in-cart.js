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
    return response.data;
  } catch (e) {
    console.error(e);
  }
};
export { updateProductCountInCart };
