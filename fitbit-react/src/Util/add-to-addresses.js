import Axios from "axios";

const addToAddresses = async (address) => {
  const token = localStorage.getItem("token");
  try {
    const response = await Axios.post(
      "/api/user/address",
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

export { addToAddresses };
