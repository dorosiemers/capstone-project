import { createContext, useContext, useState } from "react";

export const ListContext = createContext(null);
export const ListProvider = ({ children }) => {
  const [incidents, setIncidents] = useState([]);

  return (
    <ListContext.Provider value={{ incidents, setIncidents }}>
      {children}
    </ListContext.Provider>
  );
};

export function useIncidents() {
  return useContext(ListContext);
}
