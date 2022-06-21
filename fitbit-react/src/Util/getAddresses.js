import Axios from "axios";

const getAddresses = async () => {
  const token = localStorage.getItem("token");
  try {
    const response = await Axios.get("api/user/addresses", {
      headers: {
        authorization: token,
      },
    });
    const addresses = response.data.addresses;

    return {
      data: addresses,
      success: true,
      message: "Data Fetched Successfully",
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

export { getAddresses };
