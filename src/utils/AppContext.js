import { createContext, useState } from "react";

export const AppContext = createContext();
export const AppProvider = ({children}) => {
  const [name, setName] = useState("Surya");
  return (
    <AppContext.Provider value={{ name, setName }}>
      {children}
    </AppContext.Provider>
  );
};
