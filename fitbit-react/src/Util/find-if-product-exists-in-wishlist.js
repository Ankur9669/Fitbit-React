// Function to check if product exists in wishlist
const findIfProductExistInWishList = (wishlist, productId) => {
  // If product is there true would be returned
  if (wishlist.length > 0) {
    return wishlist.some((wishListItem) => wishListItem._id === productId);
  }
  //Else false
  return false;
};
export { findIfProductExistInWishList };
