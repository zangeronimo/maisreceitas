import React from 'react';

import { SidebarProvider } from './Sidebar';

const Hooks: React.FC = ({ children }) => (
  <SidebarProvider>
    {children}
  </SidebarProvider>
);

export default Hooks;
