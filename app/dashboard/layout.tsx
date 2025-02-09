"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Home,
  CheckSquare,
  Calendar,
  Settings,
  Users,
  Bell,
  BarChart,
  LogOut,
  HelpCircle,
  Bot,
  Menu,
} from "lucide-react";
import { useState } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-black">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-zinc-800 rounded-lg"
      >
        <Menu className="w-6 h-6 text-white" />
      </button>

      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 fixed lg:relative ${
          isCollapsed ? "lg:w-20" : "w-64"
        } h-full border-r border-zinc-800 p-4 bg-black transition-all duration-300 ease-in-out z-40`}
      >
        {/* Logo */}
        <div className="mb-8 px-2 flex items-center justify-between">
          <Image
            src="/assets/logo.png"
            alt="Chimly"
            width={120}
            height={40}
            className={`brightness-0 invert transition-all duration-300 ${
              isCollapsed ? "hidden" : "block"
            }`}
          />
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="hidden lg:block p-2 hover:bg-zinc-800 rounded-lg"
          >
            <Menu
              className={`${
                isCollapsed ? "lg:w-6 lg:h-6" : "w-4 h-4"
              } text-white`}
            />
          </button>
        </div>

        {/* Navigation */}
        <nav className="space-y-1">
          <Link
            href="/dashboard"
            className={`flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors ${
              isCollapsed ? "lg:justify-center" : ""
            }`}
          >
            <Home className={`${isCollapsed ? "lg:w-8 lg:h-8" : "w-4 h-4"}`} />
            <span className={isCollapsed ? "lg:hidden" : ""}>Home</span>
          </Link>
          <Link
            href="/dashboard/ai"
            className={`flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors ${
              isCollapsed ? "lg:justify-center" : ""
            }`}
          >
            <Bot className={`${isCollapsed ? "lg:w-8 lg:h-8" : "w-4 h-4"}`} />
            <span className={isCollapsed ? "lg:hidden" : ""}>AI</span>
          </Link>
          <Link
            href="/dashboard/tasks"
            className={`flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors ${
              isCollapsed ? "lg:justify-center" : ""
            }`}
          >
            <CheckSquare
              className={`${isCollapsed ? "lg:w-8 lg:h-8" : "w-4 h-4"}`}
            />
            <span className={isCollapsed ? "lg:hidden" : ""}>Tasks</span>
          </Link>

          <Link
            href="/dashboard/calendar"
            className={`flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors ${
              isCollapsed ? "lg:justify-center" : ""
            }`}
          >
            <Calendar
              className={`${isCollapsed ? "lg:w-8 lg:h-8" : "w-4 h-4"}`}
            />
            <span className={isCollapsed ? "lg:hidden" : ""}>Calendar</span>
          </Link>

          <Link
            href="/dashboard/analytics"
            className={`flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors ${
              isCollapsed ? "lg:justify-center" : ""
            }`}
          >
            <BarChart
              className={`${isCollapsed ? "lg:w-8 lg:h-8" : "w-4 h-4"}`}
            />
            <span className={isCollapsed ? "lg:hidden" : ""}>Analytics</span>
          </Link>

          <Link
            href="/dashboard/team"
            className={`flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors ${
              isCollapsed ? "lg:justify-center" : ""
            }`}
          >
            <Users className={`${isCollapsed ? "lg:w-8 lg:h-8" : "w-4 h-4"}`} />
            <span className={isCollapsed ? "lg:hidden" : ""}>Team</span>
          </Link>
        </nav>

        {/* Secondary Navigation */}
        <div className="mt-8">
          <h3
            className={`px-3 text-xs font-semibold text-zinc-500 uppercase tracking-wider ${
              isCollapsed ? "lg:hidden" : ""
            }`}
          >
            Settings
          </h3>
          <nav className="mt-2 space-y-1">
            <Link
              href="/dashboard/settings"
              className={`flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors ${
                isCollapsed ? "lg:justify-center" : ""
              }`}
            >
              <Settings
                className={`${isCollapsed ? "lg:w-8 lg:h-8" : "w-4 h-4"}`}
              />
              <span className={isCollapsed ? "lg:hidden" : ""}>Settings</span>
            </Link>

            <Link
              href="/dashboard/notifications"
              className={`flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors ${
                isCollapsed ? "lg:justify-center" : ""
              }`}
            >
              <Bell
                className={`${isCollapsed ? "lg:w-8 lg:h-8" : "w-4 h-4"}`}
              />
              <span className={isCollapsed ? "lg:hidden" : ""}>
                Notifications
              </span>
            </Link>

            <Link
              href="/help"
              className={`flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors ${
                isCollapsed ? "lg:justify-center" : ""
              }`}
            >
              <HelpCircle
                className={`${isCollapsed ? "lg:w-8 lg:h-8" : "w-4 h-4"}`}
              />
              <span className={isCollapsed ? "lg:hidden" : ""}>
                Help & Support
              </span>
            </Link>
          </nav>
        </div>

        {/* User Section */}
        <div
          className={`mt-auto pt-4 border-t border-zinc-800 ${
            isCollapsed ? "lg:hidden" : ""
          }`}
        >
          <div className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-zinc-800 transition-colors cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center">
              <span className="text-sm font-medium text-emerald-500">JD</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">
                John Doe
              </p>
              <p className="text-xs text-zinc-500 truncate">john@example.com</p>
            </div>
            <LogOut className="w-4 h-4 text-zinc-400" />
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto w-full">
        <div className="p-4 sm:p-8">
          <div className="max-w-7xl mx-auto">{children}</div>
        </div>
      </main>
    </div>
  );
}
