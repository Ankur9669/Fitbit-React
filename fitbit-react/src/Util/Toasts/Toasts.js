import React, { useEffect } from "react";
import { useToast } from "../../Context/toast-context";
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
    console.log("Inside");
  }, []);

  return (
    <div style={{ zIndex: "1000" }}>
      {toastList.map((toast) => {
        return (
          <div key={toast?.id}>
            <p>{toast?.title}</p>
            <p>{toast?.id}</p>
            <button onClick={() => deleteToast(toast?.id)}>Close Toast</button>
          </div>
        );
      })}
    </div>
  );
}

export default Toasts;
