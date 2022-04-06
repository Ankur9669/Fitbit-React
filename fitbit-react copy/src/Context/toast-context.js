import { createContext, useReducer, useContext } from "react";
import { toastReducer } from "../Reducers/toast-reducer";
import { v4 as uuid } from "uuid";
const ToastContext = createContext();

const initialState = [];
const ToastProvider = ({ children }) => {
  const [toastList, dispatchToast] = useReducer(toastReducer, initialState);

  const showToast = (title, type) => {
    dispatchToast({
      type: "ADD_TOAST",
      payload: {
        value: { id: uuid(), title: title, type: type },
      },
    });
  };
  return (
    <ToastContext.Provider value={{ toastList, dispatchToast, showToast }}>
      {children}
    </ToastContext.Provider>
  );
};

const useToast = () => useContext(ToastContext);

export { ToastProvider, useToast };
