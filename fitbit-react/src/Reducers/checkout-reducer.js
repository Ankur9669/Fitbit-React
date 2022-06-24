const checkoutReducer = (chekoutDetails, action) => {
  switch (action.type) {
    case "SET_ADDRESS":
      return { ...chekoutDetails, selectedAddress: action.payload.address };
    case "SET_ORDERS":
      return {
        ...chekoutDetails,
        orderId: action.payload.orderId,
        totalPrice: action.payload.totalPrice,
        orders: [...action.payload.orders],
      };
  }
};

export { checkoutReducer };
// const initialState = {
//   orderId: "",
//   totalPrice: 0,
//   selectedAddress: {},
//   orders: [],
// };
