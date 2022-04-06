const toastReducer = (state, action) => {
  switch (action.type) {
    case "SET_LIST":
      return action.payload;

    case "ADD_TOAST":
      return [...state, action.payload.value];

    default:
      return state;
  }
};
export { toastReducer };
