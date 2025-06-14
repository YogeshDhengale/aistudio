"use client";

import React from "react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import SettingDropdown from "./setting-dropdown";
import Link from "next/link";
import {
  AlignJustify,
  KeyRound,
  SlidersHorizontal,
  SquareArrowOutUpRight,
  SquarePen,
} from "lucide-react";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useSidebar } from "./ui/sidebar";
import ModelVersionDropdown from "./model-version-dropdown";
import { useToolContext } from "@/contexts/tool-context";

const AppHeader = () => {
  const pathName = usePathname();
  const { toggleSidebar } = useSidebar();
  const { open, setOpen, component, setComponent } = useToolContext();
  return (
    <header className="flex h-18 shrink-0 items-center justify-end gap-2 transition-[width,height] ease-linear w-full">
      <div className="flex items-center gap-1 md:gap-5 px-4 w-full">
        <div className="md:hidden">
          <Button
            variant="ghost"
            className="size-10 p-2 rounded-full text-primary"
            aria-label="Image"
            onClick={toggleSidebar}
          >
            <AlignJustify />
          </Button>
        </div>
        {/* nav for small screens as well as spacer */}
        <div className="flex-1">
          <div className={cn("flex items-center gap-2 md:hidden", pathName !== "/" && "hidden")}>
            <div className="flex-1">
              <ModelVersionDropdown />
            </div>
            <Button
              variant="ghost"
              className="size-10 p-2 rounded-full"
            >
              <SquarePen />
            </Button>
            <Button
              variant="ghost"
              className="size-10 p-2 rounded-full"
              onClick={() => {
                setOpen(component !== "RUN_SETTING" ? true : !open);
                setComponent("RUN_SETTING");
              }}
            >
              <SlidersHorizontal />
            </Button>
          </div>
        </div>
        {/* Nav for Big screens */}
        <div className="hidden md:flex items-center gap-3">
          <Button className="rounded-full mr-3" variant="secondary">
            <KeyRound /> Get API key
          </Button>
          <Link
            href={"/"}
            className={cn(
              "flex items-center gap-2 text-sm text-muted-foreground hover:text-primary",
              pathName === "/" && "text-primary  font-extrabold"
            )}
          >
            Studio
          </Link>
          <Link
            href={"/dashboard"}
            className={cn(
              "flex items-center gap-2 text-sm text-muted-foreground hover:text-primary",
              pathName === "/dashboard" && "text-primary  font-extrabold"
            )}
          >
            Dashboard
          </Link>
          <Link
            href={"https://ai.google.dev/gemini-api/docs"}
            target="_blank"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
          >
            Documentation{" "}
            <SquareArrowOutUpRight
              strokeWidth={1.5}
              className="size-3 -mb-0.5"
            />
          </Link>
        </div>
        {/* Setting Dropdown */}
        <SettingDropdown />
        <Avatar className="size-9 hidden md:block">
          <AvatarFallback className="bg-blue-800 text-primary-foreground text-2xl font-medium">
            Y
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default AppHeader;
