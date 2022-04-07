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

  const getToastByType = (type) => {
    switch (type) {
      case "SUCCESS":
        return "toast-success";

      case "ERROR":
        return "toast-error";

      case "WARNING":
        return "toast-warning";

      case "INFO":
        return "toast-info";

      default:
        return "toast-success";
    }
  };
  return (
    <div className="toasts-container">
      {toastList.map((toast) => {
        return (
          <div key={toast.id} className={`toast ${getToastByType(toast.type)}`}>
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
