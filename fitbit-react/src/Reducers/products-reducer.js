import { products } from "../Temp/products";
import { sortByLowToHigh } from "../Util/sort";
import { sortByHighToLow } from "../Util/sort";
const productReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY_HIGH_TO_LOW":
      return sortByHighToLow([...state]);

    case "SORT_BY_LOW_TO_HIGH":
      return sortByLowToHigh([...state]);

    case "FILTER_BY_RATING":
      return state;

    case "FILTER_BY_CATEGORIES":
      return state;

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

export { productReducer };
