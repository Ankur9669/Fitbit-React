import Axios from "axios";
import { token } from "../Util/token";
const increaseProductCountInCart = async (productId) => {
  try {
    const response = await Axios.post(
      `/api/user/cart/${productId}`,
      {
        action: {
          type: "increment",
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
    console.log(e);
  }
};

const updateProductCountInCart = async (productId, type) => {
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
    console.log(e);
  }
};
export { increaseProductCountInCart, updateProductCountInCart };
