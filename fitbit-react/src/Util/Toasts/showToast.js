import { useToast } from "../../Context/toast-context";
import { v4 as uuid } from "uuid";

// This is not used yet
const showToast = (title, type) => {
  const { dispatchToast } = useToast();

  dispatchToast({
    type: "ADD_TOAST",
    payload: {
      value: { id: uuid(), title: title, type: type },
    },
  });
};

export { showToast };
