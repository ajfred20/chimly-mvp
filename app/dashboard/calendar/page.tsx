"use client";

import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function CalendarPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 w-full">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-white">
            Calendar
          </h1>
          <div className="flex flex-wrap items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-2">
              <button className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg">
              <CalendarIcon className="w-4 h-4 text-zinc-400" />
              <span className="text-white">March 2024</span>
            </div>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
          {/* Calendar header */}
          <div className="grid grid-cols-7 text-sm text-zinc-400 border-b border-zinc-800">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="p-4 text-center">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar body */}
          <div className="grid grid-cols-7">
            {Array.from({ length: 35 }).map((_, i) => (
              <div
                key={i}
                className="p-4 border-b border-r border-zinc-800 min-h-[120px] hover:bg-zinc-800/50 transition-colors"
              >
                <span className="text-sm text-zinc-400">{i + 1}</span>
                {/* Event Example */}
                {i === 15 && (
                  <div className="mt-2 p-2 bg-emerald-500/10 rounded text-xs text-emerald-500">
                    Team Meeting
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
