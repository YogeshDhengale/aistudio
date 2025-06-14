"use client";

import React, { useEffect } from "react";
import { Button } from "./ui/button";
import { Image as ImageIcon, SlidersHorizontal, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { useToolContext } from "@/contexts/tool-context";
import PromptGallery from "./homeComponents/prompt-gallery";
import RunSetting from "./homeComponents/run-setting";

const ToolSidebar = () => {
  const isMobile = useIsMobile();
  const { open, setOpen, component, setComponent } = useToolContext();

  useEffect(() => {
    if (isMobile) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isMobile, setOpen]);

  return (
    <>
      <div
        data-state={open ? "open" : "closed"}
        className="fixed size-full top-0 right-0 z-5 bg-black/20 md:hidden data-[state=closed]:hidden"
      />
      <div
        id="tool-sidebar"
        data-state={open ? "open" : "closed"}
        className={cn(
          "absolute top-0 right-0 z-10 md:static bg-background rounded-2xl shadow transform will-change-auto transition-all duration-500 ease-in-out h-full translate-x-96 opacity-0 w-0 data-[state=open]:translate-x-0 data-[state=open]:opacity-100 data-[state=open]:w-80"
          // open ? "translate-x-0 opacity-100 w-80" : ""
        )}
      >
        <div className="size-full relative overflow-hidden">
          <Button
            variant="ghost"
            className="size-10 p-2 absolute top-2 right-2 rounded-full text-primary z-10"
            aria-label="Image"
            onClick={() => setOpen(false)}
          >
            <X className="size-5" strokeWidth={1.5} />
          </Button>
          {component === "PROMPT_GALLERY" ? <PromptGallery /> : <RunSetting />}
        </div>
      </div>
      <div className="p-2 hidden md:flex flex-col gap-4">
        <Button
          variant="ghost"
          className="size-10 p-2 rounded-full"
          onClick={() => {
            setOpen(component !=="RUN_SETTING" ? true : !open);
            setComponent("RUN_SETTING");
          }}
        >
          <SlidersHorizontal />
        </Button>
        <Button
          variant="ghost"
          className="size-10 p-2 rounded-full"
          aria-label="Image"
          onClick={() => {
            setOpen(component !=="PROMPT_GALLERY" ? true : !open);
            setComponent("PROMPT_GALLERY");
          }}
        >
          <ImageIcon />
        </Button>
      </div>
    </>
  );
};

export default ToolSidebar;
