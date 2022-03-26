import { useUser } from "../Context/user-context";
import { useCart } from "../Context/cart-context";
const logout = () => {
  const { user, dispatchUser } = useUser();
  const { cart, dispatchCart: dispatch } = useCart();

  dispatchUser({ type: "LOGOUT" });
  dispatchCart({ type: "SET_CART", payload: { value: [] } });
};

export { logout };
