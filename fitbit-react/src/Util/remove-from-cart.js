import Axios from "axios";

const removeFromCart = async (_id) => {
  const token = localStorage.getItem("token");
  try {
    const response = await Axios.delete(`/api/user/cart/${_id}`, {
      headers: {
        authorization: token,
      },
    });

    return {
      data: response.data,
      success: true,
      message: "Item Removed From Cart",
    };
  } catch (e) {
    //TODO Implement Toast Here
    return {
      data: "",
      success: false,
      message: `Error ${e}`,
    };
  }
};

export { removeFromCart };
