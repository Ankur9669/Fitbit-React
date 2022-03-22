import Axios from "axios";

const addToCart = async (product, token) => {
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
    console.log(e);
  }
  return [];
};

export { addToCart };
