"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import {
  FileText,
  Flag,
  HelpCircleIcon,
  Moon,
  Settings,
  ShieldUser,
  Sun,
  TvMinimal,
} from "lucide-react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import DriveAdd from "./Icons/drive-add";
import { useTheme } from "next-themes";

const SettingDropdown = () => {
  const { setTheme, theme } = useTheme();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Settings strokeWidth={1.2} className="size-5" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-44">
        <div className="mx-3 my-1 bg-sidebar rounded-sm border border-border">
          <RadioGroup
            className="grid-cols-3 gap-0"
            defaultValue={
              theme === "light" ? "1" : theme === "dark" ? "2" : "3"
            }
            onValueChange={(value) =>
              setTheme(
                value === "1" ? "light" : value === "2" ? "dark" : "system"
              )
            }
          >
            <div className="flex items-center px-2 py-3 justify-center rounded-md has-data-[state=checked]:bg-[#e6ecff] has-data-[state=checked]:dark:bg-[#333537]">
              <RadioGroupItem id={`1`} value="1" className="sr-only" />
              <Label htmlFor="1">
                <Sun className="size-4" />
              </Label>
            </div>
            <div className="flex items-center px-2 py-3 justify-center rounded-md has-data-[state=checked]:bg-[#e6ecff] has-data-[state=checked]:dark:bg-[#333537]">
              <RadioGroupItem id={`2`} value="2" className="sr-only" />
              <Label htmlFor="2">
                <Moon className="size-4" />
              </Label>
            </div>
            <div className="flex items-center px-2 py-3 justify-center rounded-md has-data-[state=checked]:bg-[#e6ecff] has-data-[state=checked]:dark:bg-[#333537]">
              <RadioGroupItem id={`3`} value="3" className="sr-only" />
              <Label htmlFor="3">
                <TvMinimal className="size-4" />
              </Label>
            </div>
          </RadioGroup>
        </div>
        <div className="p-2 flex justify-center items-center">
          <Button variant="ghost" className="mx-auto">
            <DriveAdd strokeWidth={1.5} /> Enable Save
          </Button>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-base text-primary">
          <FileText />
          <span>Terms of service</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-base text-primary">
          <ShieldUser />
          <span>Privacy policy</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-base text-primary">
          <Flag />
          <span>Send feedback</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-base text-primary">
          <HelpCircleIcon />
          <span>Billing Support</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SettingDropdown;
