const findIfProductExistsInArray = (array, productId) => {
  return array.some((arrayItem) => arrayItem._id === productId);
};

export { findIfProductExistsInArray };
