import { useState } from "react";
import Context from "./Context";

export const Provider = ({ children }) => {
  const [loginState, setLoginState] = useState({
    isLoggedIn: false,
    role: "",
    loginData: {},
  });

  const contextValue = {
    loginState,
    setLoginState,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
