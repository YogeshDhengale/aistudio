import React from "react";
import { SidebarInset } from "./ui/sidebar";
import AppHeader from "./app-header";
import { ToolProvider } from "@/contexts/tool-context";

const AppContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarInset className="border-none max-h-screen">
      <ToolProvider>
        <AppHeader />
        <div className="flex-1 w-full h-[calc(100vh-72px)] flex gap-1 overflow-hidden">
          {children}
        </div>
      </ToolProvider>
    </SidebarInset>
  );
};

export default AppContainer;
