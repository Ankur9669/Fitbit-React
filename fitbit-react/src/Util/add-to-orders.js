import Axios from "axios";

const addToOrders = async (order) => {
  const token = localStorage.getItem("token");
  try {
    const response = await Axios.post(
      "/api/user/orders",
      {
        order,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    return {
      data: response.data.orders,
      success: true,
      message: "Data Fetched Successfully",
    };
  } catch (e) {
    console.error(e);
    return {
      data: "",
      success: false,
      message: "Error in posting address",
    };
  }
};

export { addToOrders };
