import { createContext, useContext, useReducer } from "react";

const FilterContext = createContext();

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
  }
};
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
};
const FilterProvider = ({ children }) => {
  const [filters, dispatch] = useReducer(filterReducer, initialState);
  return (
    <FilterContext.Provider value={{ filters, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};
const useFilter = () => useContext(FilterContext);
export { FilterProvider, useFilter };
