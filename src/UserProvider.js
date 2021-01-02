import { createContext } from "react";

const UserContext = createContext();
function UserProvider({ children, initialState }) {
  return (
    <UserContext.Provider value={initialState}>{children}</UserContext.Provider>
  );
}

export { UserContext, UserProvider };
