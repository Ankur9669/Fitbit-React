const wishListReducer = (cart, action) => {
  switch (action.type) {
    case "SET_WISHLIST":
      return action.payload.value;
    default:
      return cart;
  }
};
export { wishListReducer };
