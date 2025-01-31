"use client";

import { BarChart3, TrendingUp, Users, ArrowUp, ArrowDown } from "lucide-react";

export default function AnalyticsPage() {
  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-white">Analytics</h1>
          <select className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 3 months</option>
            <option>Last year</option>
          </select>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Productivity Score */}
          <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-emerald-500/10 rounded-lg">
                <TrendingUp className="w-5 h-5 text-emerald-500" />
              </div>
              <span className="flex items-center gap-1 text-sm text-emerald-500">
                <ArrowUp className="w-4 h-4" />
                12%
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white">87%</h3>
            <p className="text-sm text-zinc-400">Productivity Score</p>
          </div>

          {/* Tasks Completed */}
          <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-blue-500/10 rounded-lg">
                <BarChart3 className="w-5 h-5 text-blue-500" />
              </div>
              <span className="flex items-center gap-1 text-sm text-emerald-500">
                <ArrowUp className="w-4 h-4" />
                8%
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white">156</h3>
            <p className="text-sm text-zinc-400">Tasks Completed</p>
          </div>

          {/* Team Performance */}
          <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-purple-500/10 rounded-lg">
                <Users className="w-5 h-5 text-purple-500" />
              </div>
              <span className="flex items-center gap-1 text-sm text-red-500">
                <ArrowDown className="w-4 h-4" />
                3%
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white">92%</h3>
            <p className="text-sm text-zinc-400">Team Performance</p>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Task Completion Chart */}
          <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
            <h3 className="text-lg font-semibold text-white mb-4">
              Task Completion
            </h3>
            <div className="h-64 flex items-end justify-between gap-2">
              {[65, 45, 75, 50, 80, 60, 70].map((height, i) => (
                <div key={i} className="w-full">
                  <div
                    className="bg-emerald-500/20 rounded-t hover:bg-emerald-500/30 transition-colors"
                    style={{ height: `${height}%` }}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-4 text-sm text-zinc-400">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
          </div>

          {/* Team Activity Chart */}
          <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
            <h3 className="text-lg font-semibold text-white mb-4">
              Team Activity
            </h3>
            <div className="space-y-4">
              {[
                { name: "Sarah", progress: 85 },
                { name: "Mike", progress: 72 },
                { name: "Anna", progress: 68 },
                { name: "John", progress: 92 },
              ].map((member) => (
                <div key={member.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-zinc-400">{member.name}</span>
                    <span className="text-sm text-zinc-400">
                      {member.progress}%
                    </span>
                  </div>
                  <div className="h-2 bg-zinc-800 rounded-full">
                    <div
                      className="h-full bg-emerald-500 rounded-full"
                      style={{ width: `${member.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
