const initialState = {
  sortBy: "lowToHigh",
  categories: {
    all: true,
    equipments: false,
    clothes: false,
    handGloves: false,
    dumbells: false,
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
          all: action.payload.key === "all" ? action.payload.value : false,
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
  }
};
export { filterReducer };
