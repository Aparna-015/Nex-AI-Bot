import React, { createContext, useState } from "react";

export const DataContext = createContext();  

const UserContext = ({ children }) => {
  const [start, setStart] = useState(false);

  const value = { start, setStart };

  return (
    <DataContext.Provider value={value}> 
      {children}
    </DataContext.Provider>
  );
};

export default UserContext;
