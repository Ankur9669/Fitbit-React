const wishListReducer = (wishlist, action) => {
  switch (action.type) {
    case "SET_WISHLIST":
      return [...action.payload.value];
    default:
      return wishlist;
  }
};
export { wishListReducer };
