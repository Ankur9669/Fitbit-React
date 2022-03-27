const cartReducer = (cart, action) => {
  switch (action.type) {
    case "SET_CART":
      const newCart = [...action.payload.value];
      return {
        totalPrice: findTotalPrice(newCart),
        cart: action.payload.value,
      };
    default:
      return cart;
  }
};

const findTotalPrice = (cart) => {
  if (cart.length > 0) {
    return cart.reduce((acc, curr) => acc + curr.discountedPrice * curr.qty, 0);
  }
  return 0;
};
export { cartReducer };
