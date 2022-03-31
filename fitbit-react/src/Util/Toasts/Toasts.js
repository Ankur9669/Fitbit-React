import React, { useEffect } from "react";
import { useToast } from "../../Context/toast-context";
import { AiFillCloseSquare } from "../../Assets/icons";
import "./toasts.css";

function Toasts() {
  const { toastList, dispatchToast } = useToast();

  const deleteToast = (id) => {
    let newToastList = toastList.filter((toast) => toast.id !== id);

    dispatchToast({
      type: "SET_LIST",
      payload: newToastList,
    });
  };

  useEffect(() => {
    let timeoutId;
    if (toastList.length > 0) {
      timeoutId = setTimeout(() => {
        dispatchToast({
          type: "SET_LIST",
          payload: [],
        });
      }, 3000);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [toastList]);

  return (
    <div className="toasts-container">
      {toastList.map((toast) => {
        return (
          <div
            key={toast.id}
            className={`toast ${
              toast.type === "SUCCESS"
                ? "toast-success"
                : toast.type === "ERROR"
                ? "toast-error"
                : "toast-warning"
            }`}
          >
            <p className="toast-text">{toast?.title}</p>
            <AiFillCloseSquare
              className="toast-close-icon"
              onClick={() => deleteToast(toast.id)}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Toasts;
