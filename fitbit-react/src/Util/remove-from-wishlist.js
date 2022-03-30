import Axios from "axios";

const removeFromWishList = async (_id) => {
  const token = localStorage.getItem("token");
  try {
    const response = await Axios.delete(`/api/user/wishlist/${_id}`, {
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

export { removeFromWishList };
