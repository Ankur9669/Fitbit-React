import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../Reducers/filter-reducer";
const FilterContext = createContext();
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
