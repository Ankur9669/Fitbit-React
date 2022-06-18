import Axios from "axios";

const removeFromAddresses = async (_id) => {
  const token = localStorage.getItem("token");
  try {
    const response = await Axios.delete(`/api/user/address/${_id}`, {
      headers: {
        authorization: token,
      },
    });
    return {
      data: response.data.addresses,
      success: true,
      message: "Address Deleted Successfully",
    };
  } catch (e) {
    //TODO Implement Toast Here
    console.error(e);
    return {
      data: "",
      success: false,
      message: "Could not delete address",
    };
  }
};

export { removeFromAddresses };
