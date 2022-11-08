import { createContext, useContext, useState } from "react";
import useLocalStorage from "../components/hooks/useLocalStorage";
export const ListContext = createContext(null);
export const ListProvider = ({ children }) => {
  const [incidents, setIncidents] = useLocalStorage("incidents", []);
  return (
    <ListContext.Provider value={{ incidents, setIncidents }}>
      {children}
    </ListContext.Provider>
  );
};
