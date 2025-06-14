"use client";

import React, { useState, ReactNode } from "react";

type SidebarContextProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  component: "RUN_SETTING" | "PROMPT_GALLERY";
  setComponent: (component: "RUN_SETTING" | "PROMPT_GALLERY") => void;
};

const ToolContext = React.createContext<SidebarContextProps | null>(null);

type ToolProviderProps = {
  children: ReactNode;
  defaultOpen?: boolean;
  defaultComponent?: React.FC;
};

export const ToolProvider: React.FC<ToolProviderProps> = ({
  children,
  defaultOpen = false,
}) => {
  const [open, setOpen] = useState<boolean>(defaultOpen);
  const [component, setComponent] = useState<SidebarContextProps["component"]>("RUN_SETTING");

  const value: SidebarContextProps = {
    open,
    setOpen,
    component,
    setComponent,
  };

  return (
    <ToolContext.Provider value={value}>
      {children}
    </ToolContext.Provider>
  );
};

// Custom hook to use the context
export const useToolContext = (): SidebarContextProps => {
  const context = React.useContext(ToolContext);
  
  if (!context) {
    throw new Error("useToolContext must be used within a ToolProvider");
  }
  
  return context;
};

// Hook to update the component
export const useSetToolComponent = () => {
  const { setComponent } = useToolContext();
  return setComponent;
};

export { ToolContext };