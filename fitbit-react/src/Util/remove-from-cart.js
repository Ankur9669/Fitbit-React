import Axios from "axios";

const removeFromCart = async (_id, token) => {
  try {
    const response = await Axios.delete(`/api/user/cart/${_id}`, {
      headers: {
        authorization: token,
      },
    });
    return response.data;
  } catch (e) {
    //TODO Implement Toast Here
    console.error(e);
  }
  return [];
};

export { removeFromCart };
