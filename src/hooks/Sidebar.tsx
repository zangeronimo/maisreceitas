import React, { createContext, useCallback, useContext, useState } from 'react';

interface SidebarContextData {
  toogleSidebar(): void;
  setShowSidebar(b: boolean): void;
  showSidebar: boolean;
}

const SidebarContext = createContext<SidebarContextData>({} as SidebarContextData);

const SidebarProvider: React.FC = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toogleSidebar = useCallback(() => {
    setShowSidebar(!showSidebar);
  }, [showSidebar]);

  return (
    <SidebarContext.Provider
      value={{ toogleSidebar, setShowSidebar, showSidebar }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

function useSidebar(): SidebarContextData {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error('useSidebar must be used within an SidebarProvider');
  }

  return context;
}

export { SidebarProvider, useSidebar };
