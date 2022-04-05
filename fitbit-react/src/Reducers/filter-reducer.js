const initialState = {
  sortBy: "lowToHigh",
  categories: {
    equipments: true,
    clothes: true,
    handGloves: true,
    dumbells: true,
  },
  includeOutOfStock: true,
  fastDelivery: false,
  rating: 1,
};

const filterReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY":
      return { ...state, sortBy: action.payload.value };
    case "FILTER_BY":
      return {
        ...state,
        categories: {
          ...state.categories,
          [action.payload.key]: action.payload.value,
        },
      };
    case "OTHER_FILTERS":
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    case "RESET":
      return { ...initialState };
    default:
      throw new Error();
  }
};
export { filterReducer };
