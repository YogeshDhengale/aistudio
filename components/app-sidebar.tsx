"use client";

import * as React from "react";
import {
  AudioLines,
  History,
  MessageSquareDotIcon,
  Puzzle,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenuButton,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Logo from "./Icons/logo";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <div className="text-sidebar-primary-foreground flex aspect-square size-12 items-center justify-center rounded-lg">
            <Logo className="size-8" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-medium">AI Studio</span>
          </div>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="gap-2">
          <SidebarMenuButton
            size="lg"
            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground rounded-full gap-0"
            asChild
            isActive={pathname === "/"}
          >
            <Link href="/" className="">
              <div className="text-primary flex aspect-square size-12 items-center justify-center rounded-lg">
              <MessageSquareDotIcon className="size-5" strokeWidth={1.5} />
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate">Chat</span>
            </div>
            </Link>
          </SidebarMenuButton>
          <SidebarMenuButton
            size="lg"
            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground rounded-full gap-0"
          >
            <div className="text-primary flex aspect-square size-12 items-center justify-center rounded-lg">
              <AudioLines className="size-5" strokeWidth={1.5} />
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate">Stream</span>
            </div>
          </SidebarMenuButton>
          <SidebarMenuButton
            size="lg"
            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground  rounded-full gap-0"
          >
            <div className="text-primary flex aspect-square size-12 items-center justify-center rounded-lg">
              <MessageSquareDotIcon className="size-5" strokeWidth={1.5} />
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate">Generate Media</span>
            </div>
          </SidebarMenuButton>
          <SidebarMenuButton
            size="lg"
            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground  rounded-full gap-0"
          >
            <div className="text-primary flex aspect-square size-12 items-center justify-center rounded-lg">
              <Puzzle className="size-5" strokeWidth={1.5} />
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate">Build</span>
            </div>
          </SidebarMenuButton>
          <SidebarMenuButton
            size="lg"
            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground  rounded-full gap-0"
          >
            <div className="text-primary flex aspect-square size-12 items-center justify-center rounded-lg">
              <History className="size-5" strokeWidth={1.5} />
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate">History</span>
            </div>
          </SidebarMenuButton>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarTrigger />
      </SidebarFooter>
    </Sidebar>
  );
}
