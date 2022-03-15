const filterByCategory = (data, category) => {
  return data.filter((data) => data.category === category);
};

export { filterByCategory };
