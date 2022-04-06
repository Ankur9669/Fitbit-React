const sortByHighToLow = (products) => {
  products.sort(
    (a, b) => parseInt(b.discountedPrice, 10) - parseInt(a.discountedPrice, 10)
  );
  return products;
};
const sortByLowToHigh = (products) => {
  products.sort((a, b) => a.discountedPrice - b.discountedPrice);
  return products;
};
export { sortByHighToLow, sortByLowToHigh };
