import { createContext, useContext, useState } from "react";

const PassContext = createContext(null);
const PassProvider = ({ children }) => {
  const [passId, setPassId] = useState(null);

  return (
    <PassContext.Provider value={{ passId, setPassId }}>
      {children}
    </PassContext.Provider>
  );
};

export default PassProvider;

export const usePass = () => useContext(PassContext);
