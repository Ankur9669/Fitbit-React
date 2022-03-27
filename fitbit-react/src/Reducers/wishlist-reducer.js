const wishListReducer = (wishlist, action) => {
  switch (action.type) {
    case "SET_WISHLIST":
      console.log(action.payload.value);
      return [...action.payload.value];
    default:
      return wishlist;
  }
};
export { wishListReducer };
