"use client";

import { useState } from "react";
import {
  Home,
  Settings,
  Calendar,
  Library,
  Sparkles,
  Plus,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface NavItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { icon: Home, label: "Home", href: "/dashboard/home" },
  { icon: Sparkles, label: "AI", href: "/ai" },
  { icon: Calendar, label: "Week", href: "/week" },
];

const tasks = [
  "Scootaa meeting with unilag ton",
  "Scootaa meeting with unilag ton",
  "Scootaa meeting with unilag ton",
  "Scootaa meeting with unilag ton",
  "Bus 100 class in the morning by",
];

export function Sidebar() {
  const [activeSection, setActiveSection] = useState<string>("Home");
  const [isLibraryOpen, setIsLibraryOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen w-64 bg-[#1E1F1E] border-r border-[#2A2B2A] font-ibm">
      <div className="p-4">
        <div className="flex items-center gap-2 px-2">
          <Link href="/">
            <img
              src="/assets/logo.png"
              alt="Chimly Logo"
              className="w-full max-w-[100px]"
            />
          </Link>
        </div>
        <button className="mt-4 w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-400 bg-[#2A2B2A] rounded-md hover:bg-[#3A3B3A] transition-colors">
          <Plus className="w-3 h-3" />
          New Task
        </button>
      </div>
      <nav className="flex-1 px-2 overflow-y-auto">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={() => setActiveSection(item.label)}
            className={cn(
              "flex items-center gap-2 px-4 py-2 text-gray-400 hover:text-white transition-colors rounded-md text-sm",
              activeSection === item.label && "text-white bg-[#2A2B2A]"
            )}
          >
            <item.icon className="w-4 h-4" />
            {item.label}
          </Link>
        ))}
        <button
          onClick={() => setIsLibraryOpen(!isLibraryOpen)}
          className={cn(
            "w-full flex items-center justify-between gap-2 px-4 py-2 text-gray-400 hover:text-white transition-colors rounded-md text-sm",
            isLibraryOpen && "text-white bg-[#2A2B2A]"
          )}
        >
          <div className="flex items-center gap-2">
            <Library className="w-4 h-4" />
            Library
          </div>
          {isLibraryOpen ? (
            <ChevronDown className="w-3 h-3" />
          ) : (
            <ChevronRight className="w-3 h-3" />
          )}
        </button>
        {isLibraryOpen && (
          <div className="mt-1 ml-4 space-y-1">
            {tasks.map((task, index) => (
              <div
                key={index}
                className="px-4 py-2 text-xs text-gray-400 hover:bg-[#2A2B2A] rounded-md cursor-pointer"
              >
                {task}
              </div>
            ))}
          </div>
        )}
      </nav>
      <div className="p-4 border-t border-[#2A2B2A]">
        <button className="flex items-center gap-2 px-4 py-2 w-full text-gray-400 hover:text-white transition-colors rounded-md text-sm">
          <img
            src="/placeholder.svg"
            alt="User Avatar"
            className="w-5 h-5 rounded-full"
          />
          <span className="flex-1 text-left">opataebube..</span>
          <Settings className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}
