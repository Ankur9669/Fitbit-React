import Axios from "axios";

const editAddresses = async (addressId, address) => {
  const token = localStorage.getItem("token");
  try {
    const response = await Axios.post(
      `/api/user/address/${addressId}`,
      {
        address,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    return {
      data: response.data.addresses,
      success: true,
      message: "Address Edited Successfully",
    };
  } catch (e) {
    console.error(e);
    return {
      data: "",
      success: false,
      message: "Error in editing address",
    };
  }
};

export { editAddresses };
