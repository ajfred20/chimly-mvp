"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Home,
  LayoutDashboard,
  CheckSquare,
  Calendar,
  Settings,
  Users,
  Bell,
  BarChart,
  LogOut,
  HelpCircle,
  Bot,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-black">
      {/* Sidebar */}
      <aside className="w-64 border-r border-zinc-800 p-4">
        {/* Logo */}
        <div className="mb-8 px-2">
          <Image
            src="/assets/logo.png"
            alt="Chimly"
            width={120}
            height={40}
            className="brightness-0 invert"
          />
        </div>

        {/* Navigation */}
        <nav className="space-y-1">
          <Link
            href="/dashboard"
            className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-white bg-zinc-800 rounded-lg"
          >
            <Home className="w-4 h-4" />
            Home
          </Link>
          <Link
            href="/dashboard/ai"
            className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors"
          >
            <Bot className="w-4 h-4" />
            AI
          </Link>
          <Link
            href="/dashboard/tasks"
            className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors"
          >
            <CheckSquare className="w-4 h-4" />
            Tasks
          </Link>

          <Link
            href="/dashboard/calendar"
            className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors"
          >
            <Calendar className="w-4 h-4" />
            Calendar
          </Link>

          <Link
            href="/dashboard/analytics"
            className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors"
          >
            <BarChart className="w-4 h-4" />
            Analytics
          </Link>

          <Link
            href="/dashboard/team"
            className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors"
          >
            <Users className="w-4 h-4" />
            Team
          </Link>
        </nav>

        {/* Secondary Navigation */}
        <div className="mt-8">
          <h3 className="px-3 text-xs font-semibold text-zinc-500 uppercase tracking-wider">
            Settings
          </h3>
          <nav className="mt-2 space-y-1">
            <Link
              href="/dashboard/settings"
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors"
            >
              <Settings className="w-4 h-4" />
              Settings
            </Link>

            <Link
              href="/dashboard/notifications"
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors"
            >
              <Bell className="w-4 h-4" />
              Notifications
            </Link>

            <Link
              href="/help"
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors"
            >
              <HelpCircle className="w-4 h-4" />
              Help & Support
            </Link>
          </nav>
        </div>

        {/* User Section */}
        <div className="mt-auto pt-4 border-t border-zinc-800">
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
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-2xl font-bold text-white">Dashboard</h1>
              <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
                New Task
              </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Stat Card */}
              <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-emerald-500/10 rounded-lg">
                    <CheckSquare className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-400">Total Tasks</p>
                    <p className="text-2xl font-bold text-white">248</p>
                  </div>
                </div>
              </div>

              {/* Stat Card */}
              <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg">
                    <Users className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-400">Team Members</p>
                    <p className="text-2xl font-bold text-white">12</p>
                  </div>
                </div>
              </div>

              {/* Stat Card */}
              <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-purple-500/10 rounded-lg">
                    <BarChart className="w-6 h-6 text-purple-500" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-400">Completion Rate</p>
                    <p className="text-2xl font-bold text-white">87%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h2 className="text-lg font-semibold text-white mb-4">
                Recent Activity
              </h2>
              <div className="space-y-4">
                {/* Activity Item */}
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <p className="text-sm text-zinc-400">
                    <span className="text-white">Sarah</span> completed task{" "}
                    <span className="text-white">Homepage Redesign</span>
                  </p>
                  <span className="ml-auto text-xs text-zinc-500">2h ago</span>
                </div>

                {/* Activity Item */}
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  <p className="text-sm text-zinc-400">
                    <span className="text-white">Mike</span> added new task{" "}
                    <span className="text-white">API Integration</span>
                  </p>
                  <span className="ml-auto text-xs text-zinc-500">4h ago</span>
                </div>

                {/* Activity Item */}
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-purple-500" />
                  <p className="text-sm text-zinc-400">
                    <span className="text-white">Anna</span> updated project{" "}
                    <span className="text-white">Mobile App</span>
                  </p>
                  <span className="ml-auto text-xs text-zinc-500">6h ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
