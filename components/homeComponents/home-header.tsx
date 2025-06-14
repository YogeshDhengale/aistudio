import React from "react";
import { Button } from "../ui/button";
import {
  ArrowRightLeft,
  Code,
  EllipsisVertical,
  Files,
  NotepadText,
  RotateCw,
  Save,
  Share2,
  Trash,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const HomeHeader = () => {
  return (
    <div className="px-5 pt-2 w-full bg-background sticky top-0">
      <div className="flex items-center gap-2 py-2 border-b border-border">
        <div className="mx-3 flex-1">
          <h3 className="text-base font-medium">Chat Prompt</h3>
        </div>
        <Button
          variant="ghost"
          className="size-10 p-2 rounded-full"
          aria-label="Image"
        >
          <NotepadText strokeWidth={1.5} />
        </Button>
        <Button
          variant="ghost"
          className="size-10 p-2 rounded-full"
          aria-label="Image"
        >
          <Code strokeWidth={1.5} />
        </Button>
        <Button
          variant="ghost"
          className="size-10 p-2 rounded-full hidden md:flex"
          aria-label="Image"
          disabled
        >
          <Share2 strokeWidth={1.5} />
        </Button>
        <Button
          variant="ghost"
          className="size-10 p-2 rounded-full hidden md:flex"
          aria-label="Image"
          disabled
        >
          <Save strokeWidth={1.5} />
        </Button>
        <Button
          variant="ghost"
          className="size-10 p-2 rounded-full hidden md:flex"
          aria-label="Image"
        >
          <ArrowRightLeft strokeWidth={1.5} />
        </Button>
        <Button
          variant="ghost"
          className="size-10 p-2 rounded-full hidden md:flex"
          aria-label="Image"
          disabled
        >
          <RotateCw strokeWidth={1.5} />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <EllipsisVertical strokeWidth={1.2} className="size-5" />
              <span className="sr-only">Menu Bar</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-44">
            <DropdownMenuItem className="text-base text-primary md:hidden">
              <Share2 />
              <span>Share Prompt</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="text-base text-primary md:hidden">
              <RotateCw />
              <span>Clear chat</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="text-base text-primary">
              <Files />
              <span>Make a copy</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="text-base text-primary">
              <Trash />
              <span>Delete Prompt</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default HomeHeader;
