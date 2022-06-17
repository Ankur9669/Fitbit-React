const addressReducer = (state, action) => {
  switch (action.type) {
    case "SET_ADDRESSES":
      const newAddresses = [...action.payload.value];
      return { addresses: newAddresses };

    default:
      return state;
  }
};

export { addressReducer };
