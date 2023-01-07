import React from 'react';

import { SidebarProvider } from './sidebar';
import { ToastProvider } from './toast';

const Hooks: React.FC = ({ children }) => (
  <SidebarProvider>
    <ToastProvider>
      {children}
    </ToastProvider>
  </SidebarProvider>
);

export default Hooks;
