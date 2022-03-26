import Axios from "axios";

const addToCart = async (product) => {
  const token = localStorage.getItem("token");
  try {
    const response = await Axios.post(
      "/api/user/cart",
      {
        product,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    return response.data;
  } catch (e) {
    //TODO Implement Toast Here
    console.error(e);
  }
  return [];
};

export { addToCart };
