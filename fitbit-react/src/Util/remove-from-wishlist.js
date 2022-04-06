import Axios from "axios";

const removeFromWishList = async (_id) => {
  const token = localStorage.getItem("token");
  try {
    const response = await Axios.delete(`/api/user/wishlist/${_id}`, {
      headers: {
        authorization: token,
      },
    });

    return {
      data: response.data,
      success: true,
      message: "Item Removed From WishList",
    };
  } catch (e) {
    //TODO Implement Toast Here
    return {
      data: "",
      success: false,
      message: `Error ${e}`,
    };
  }
  return [];
};

export { removeFromWishList };
