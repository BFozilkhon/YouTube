import React, { createContext, useState } from "react";

export const ChooseCreateContext = createContext();

export const ChooseContext = ({ children }) => {
  const [headerName, setHeaderName] = useState("Kino");
  return (
    <ChooseCreateContext.Provider value={[headerName, setHeaderName]}>
      {children}
    </ChooseCreateContext.Provider>
  );
};

export default ChooseContext;
