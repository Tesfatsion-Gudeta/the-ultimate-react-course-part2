import React, { ReactNode, useReducer } from "react";
import AuthContext from "./contexts/authContext";
import authReducer from "./reducers/authReducer";

interface Props {
  children: ReactNode;
}
const AuthProvider = ({ children }: Props) => {
  const [user, dispatch] = useReducer(authReducer, "");

  <AuthContext.Provider value={{ user, dispatch }}>
    {children}
  </AuthContext.Provider>;
  return <div>AuthProvider</div>;
};

export default AuthProvider;
