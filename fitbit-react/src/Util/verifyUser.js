import Axios from "axios";

export const verifyUser = async () => {
  const token = localStorage.getItem("token");
  try {
    const response = await Axios.post("/api/auth/verify", {
      encodedToken: token,
    });
    return {
      data: response.data.foundUser,
      success: true,
      message: "User Verified Successfully",
    };
  } catch (e) {
    console.error(e);
    return {
      data: "",
      success: false,
      message: "Error in verifying user",
    };
  }
};
