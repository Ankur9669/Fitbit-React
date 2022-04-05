import { createContext, useReducer, useContext } from "react";
import { toastReducer } from "../Reducers/toast-reducer";
const ToastContext = createContext();

const initialState = [];
const ToastProvider = ({ children }) => {
  const showToast = (title, type) => {
    const { dispatchToast } = useToast();

    dispatchToast({
      type: "ADD_TOAST",
      payload: {
        value: { id: uuid(), title: title, type: type },
      },
    });
  };
  const [toastList, dispatchToast] = useReducer(toastReducer, initialState);
  return (
    <ToastContext.Provider value={{ toastList, dispatchToast, showToast }}>
      {children}
    </ToastContext.Provider>
  );
};

const useToast = () => useContext(ToastContext);

export { ToastProvider, useToast };
