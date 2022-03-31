import { createContext, useReducer, useContext } from "react";
import { toastReducer } from "../Reducers/toast-reducer";
const ToastContext = createContext();

const initialState = [];
const ToastProvider = ({ children }) => {
  const [toastList, dispatchToast] = useReducer(toastReducer, initialState);
  return (
    <ToastContext.Provider value={{ toastList, dispatchToast }}>
      {children}
    </ToastContext.Provider>
  );
};

const useToast = () => useContext(ToastContext);

export { ToastProvider, useToast };
