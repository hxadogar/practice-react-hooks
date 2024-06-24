import React, { createContext, useState } from "react";

export const LoginContext = createContext();

const LoginContextProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState(true);

  return (
    <LoginContextProvider.Provider value={userDetails}>
      {children}
    </LoginContextProvider.Provider>
  );
};

export default LoginContextProvider;
