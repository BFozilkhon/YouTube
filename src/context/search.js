import React, { createContext, useState } from "react";
import { data } from "../mock/body";

export const MovieCreateContext = createContext();

export const SearchContext = ({ children }) => {
  const [lists, setLists] = useState(data);

  return (
    <MovieCreateContext.Provider value={[lists, setLists]}>
      {children}
    </MovieCreateContext.Provider>
  );
};

export default SearchContext;
