"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Image as ImageIcon, SlidersHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const ToolSidebar = () => {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(isMobile ? false : true);

  return (
    <>
      <div className="fixed size-full top-0 right-0 z-5 bg-black/20 md:hidden" />
      <div
        id="tool-sidebar"
        data-state={open ? "open" : "closed"}
        className={cn(
          "absolute top-0 right-0 z-10 md:static bg-background rounded-2xl shadow transform will-change-auto transition-all duration-500 ease-in-out h-full translate-x-96 opacity-0 pointer-events-none w-0 data-[state=open]:translate-x-0 data-[state=open]:opacity-100 data-[state=open]:w-80",
          // open ? "translate-x-0 opacity-100 w-80" : ""
        )}
      >
      
      </div>
      <div className="p-2 hidden md:flex flex-col gap-4">
        <Button
          variant="ghost"
          className="size-10 p-2 rounded-full"
          onClick={() => setOpen((prev) => !prev)}
        >
          <SlidersHorizontal />
        </Button>
        <Button
          variant="ghost"
          className="size-10 p-2 rounded-full"
          aria-label="Image"
        >
          <ImageIcon />
        </Button>
      </div>
    </>
  );
};

export default ToolSidebar;
