import { createContext, useReducer, useContext } from "react";

const ToastContext = createContext();

const initialState = [];
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LIST":
      return action.payload;

    case "ADD_TOAST":
      console.log(action.payload.value);
      return [...state, action.payload.value];

    default:
      return state;
  }
};
const ToastProvider = ({ children }) => {
  const [toastList, dispatchToast] = useReducer(reducer, initialState);
  return (
    <ToastContext.Provider value={{ toastList, dispatchToast }}>
      {children}
    </ToastContext.Provider>
  );
};

const useToast = () => useContext(ToastContext);

export { ToastProvider, useToast };
