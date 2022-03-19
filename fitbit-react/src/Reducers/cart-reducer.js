const cartReducer = (cart, action) => {
  //   console.log(cart);
  switch (action.type) {
    case "ADD_TO_CART":
      return [...cart, action.payload];
    case "REMOVE_FROM_CART":
      return cart;
    default:
      return cart;
  }
};

export { cartReducer };
