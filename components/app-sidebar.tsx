"use client";

import * as React from "react";
import {
  AudioLines,
  ChartNoAxesColumn,
  ChevronRight,
  History,
  KeyRound,
  MessageSquareDotIcon,
  Puzzle,
  Server,
  SquareArrowOutUpRight,
  type LucideIcon,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Logo from "./Icons/logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import DriveAdd from "./Icons/drive-add";

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
        <SidebarGroup className="hidden md:block">
          <SidebarGroup
            className={cn("gap-2", pathname === "/dashboard" && "hidden")}
          >
            <StudioItems pathname={pathname} />
          </SidebarGroup>
          <SidebarGroup className={cn("gap-2", pathname === "/" && "hidden")}>
            <DashboardItems pathname={pathname} />
          </SidebarGroup>
        </SidebarGroup>
        <SidebarGroup className="gap-2 md:hidden">
          <Button className="rounded-full mr-3 max-w-max" variant="secondary">
            <KeyRound /> Get API key
          </Button>
          <CollapsableItem title="Studio">
            <>
              <StudioItems pathname={pathname} />
              <SidebarMenuSubItem className="list-none flex items-center justify-center">
                <Button variant="ghost" className="mx-auto">
                  <DriveAdd strokeWidth={1.5} /> Enable Save
                </Button>
              </SidebarMenuSubItem>
            </>
          </CollapsableItem>
          <SidebarMenuButton asChild>
            <Link
              href={"https://ai.google.dev/gemini-api/docs"}
              target="_blank"
              className="flex items-center gap-2 text-sm text-grey-600 hover:text-primary"
            >
              Documentation{" "}
              <SquareArrowOutUpRight
                strokeWidth={1.5}
                className="size-3 -mb-0.5"
              />
            </Link>
          </SidebarMenuButton>
          <CollapsableItem title="Dashboard">
            <DashboardItems pathname={pathname} />
          </CollapsableItem>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarTrigger />
      </SidebarFooter>
    </Sidebar>
  );
}

const CollapsableItem = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <SidebarMenu>
      <Collapsible key={title} className="group/collapsible">
        <SidebarMenuItem>
          <CollapsibleTrigger asChild>
            <SidebarMenuButton
              tooltip={title}
              size="lg"
              className="text-base text-primary font-medium"
            >
              <span>{title}</span>
              <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
            </SidebarMenuButton>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <SidebarMenuSub className="border-none m-0 p-0">
              {children}
            </SidebarMenuSub>
          </CollapsibleContent>
        </SidebarMenuItem>
      </Collapsible>
    </SidebarMenu>
  );
};

const StudioItems = ({ pathname }: { pathname: string }) => {
  const items = [
    {
      isActive: pathname === "/" ? true : false,
      href: "/",
      icon: MessageSquareDotIcon,
      title: "Chat",
    },
    {
      isActive: false,
      href: "#",
      icon: AudioLines,
      title: "Stream",
    },
    {
      isActive: false,
      href: "#",
      icon: MessageSquareDotIcon,
      title: "Generate Media",
    },
    {
      isActive: false,
      href: "#",
      icon: Puzzle,
      title: "Build",
    },
    {
      isActive: false,
      href: "#",
      icon: History,
      title: "History",
    },
  ];

  return (
    <>
      {items.map((item) => (
        <SidebarMenuSubItem key={item.title} className="list-none">
          <MenuButton item={item} />
        </SidebarMenuSubItem>
      ))}
    </>
  );
};

const DashboardItems = ({ pathname }: { pathname: string }) => {
  const items = [
    {
      isActive: pathname === "/dashboard",
      href: "/dashboard",
      icon: KeyRound,
      title: "API Keys",
    },
    {
      isActive: false,
      href: "#",
      icon: ChartNoAxesColumn,
      title: "Usage & Billing",
    },
    {
      isActive: false,
      href: "#",
      icon: Server,
      title: "Changelog",
    },
  ];

  return (
    <>
      {items.map((item) => (
        <SidebarMenuSubItem key={item.title} className="list-none">
          <MenuButton item={item} />
        </SidebarMenuSubItem>
      ))}
    </>
  );
};

const MenuButton = ({
  item,
}: {
  item: { isActive?: boolean; href: string; icon: LucideIcon; title: string };
}) => {
  return (
    <SidebarMenuButton
      size="lg"
      className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground rounded-full gap-0"
      asChild
      isActive={item.isActive}
    >
      <Link href={item.href}>
        <div className="text-primary flex aspect-square size-12 items-center justify-center rounded-lg">
          <item.icon className="size-5" strokeWidth={1.5} />
        </div>
        <div className="grid flex-1 text-left text-sm leading-tight">
          <span className="truncate">{item.title}</span>
        </div>
      </Link>
    </SidebarMenuButton>
  );
};
