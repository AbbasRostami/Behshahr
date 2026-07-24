import React, { createContext, useContext, useState } from "react";

interface PassData {
  id: string;
  message: string;
}

interface PassContextType {
  passId: PassData | null;
  setPassId: React.Dispatch<React.SetStateAction<PassData | null>>;
}

const PassContext = createContext<PassContextType>({
  passId: null,
  setPassId: () => {},
});

const PassProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [passId, setPassId] = useState<PassData | null>(null);

  return (
    <PassContext.Provider value={{ passId, setPassId }}>
      {children}
    </PassContext.Provider>
  );
};

export default PassProvider;

export const usePass = (): PassContextType => {
  const context = useContext(PassContext);
  if (!context) throw new Error("usePass must be used within PassProvider");
  return context;
};
