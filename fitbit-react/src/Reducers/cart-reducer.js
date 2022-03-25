const cartReducer = (cart, action) => {
  switch (action.type) {
    case "SET_CART":
      return action.payload.value;
    default:
      return cart;
  }
};

export { cartReducer };
