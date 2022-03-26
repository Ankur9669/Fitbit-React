import { createContext, useContext, useReducer } from "react";

const UserContext = createContext();
const initialState = {
  user: {},
  isUserLoggedIn: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload.value, isUserLoggedIn: true };

    case "LOGOUT":
      return initialState;
  }
};
const UserProvider = ({ children }) => {
  const [user, dispatchUser] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{ user, dispatchUser }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);

export { useUser, UserProvider };
