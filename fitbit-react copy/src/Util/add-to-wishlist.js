import Axios from "axios";

const addToWishList = async (product) => {
  const token = localStorage.getItem("token");
  try {
    const response = await Axios.post(
      "/api/user/wishlist",
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
      message: "Item Added To WishList",
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

export { addToWishList };
