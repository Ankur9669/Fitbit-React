import Axios from "axios";

const getOrders = async () => {
  const token = localStorage.getItem("token");
  try {
    const response = await Axios.get("api/user/orders", {
      headers: {
        authorization: token,
      },
    });

    return {
      data: response.data.orders,
      success: true,
      message: "Orders Fetched Successfully",
    };
  } catch (e) {
    console.error(e);
    return {
      data: "",
      success: false,
      message: `Error: ${e}`,
    };
  }
};

export { getOrders };
