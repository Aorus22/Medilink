import { createContext, useState, ReactNode } from "react";

export const RightbarContext = createContext<{ setRightbarOpen: (val: boolean | ((prev: boolean) => boolean)) => void }>({
  setRightbarOpen: () => {},
});

export const RightbarProvider = ({ children }: { children: ReactNode }) => {
  const [rightbarOpen, setRightbarOpen] = useState(true);

  return (
    <RightbarContext.Provider value={{ setRightbarOpen }}>
      {children}
    </RightbarContext.Provider>
  );
};