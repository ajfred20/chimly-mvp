"use client";

import { CheckSquare, Clock, Filter, Plus, Search, Tag } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

export default function TasksPage() {
  return (
    <div className="p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white">Tasks</h1>
            <p className="text-zinc-400 mt-1">Manage and track your tasks</p>
          </div>
          <Link
            href="/dashboard/tasks/new"
            className="w-full sm:w-auto px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
          >
            <Plus className="w-4 h-4" />
            New Task
          </Link>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search tasks..."
              className="w-full pl-10 pr-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
            />
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-zinc-900 border border-zinc-800 text-white rounded-lg hover:bg-zinc-800 transition-colors flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Filter
            </button>
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px] bg-zinc-900 border-zinc-800 text-white">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent className="bg-zinc-900 border-zinc-800">
                <SelectItem value="all">All Tasks</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Tasks List */}
        <div className="space-y-4">
          {/* Task Item */}
          {[
            {
              title: "Homepage Redesign",
              description: "Update the landing page with new brand guidelines",
              tag: "Design",
              tagColor: "emerald",
              assignees: [
                { initials: "JD", color: "emerald" },
                { initials: "AM", color: "blue" },
              ],
              dueIn: "2 days",
            },
            {
              title: "API Integration",
              description: "Implement payment gateway integration",
              tag: "Development",
              tagColor: "blue",
              assignees: [{ initials: "RK", color: "purple" }],
              dueIn: "5 days",
            },
            // Add more tasks as needed
          ].map((task, index) => (
            <div
              key={index}
              className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg hover:bg-zinc-800/50 transition-colors group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex items-center gap-4 flex-1">
                  <div className="p-2 bg-emerald-500/10 rounded-lg">
                    <CheckSquare className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-white font-medium truncate">
                        {task.title}
                      </h3>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium bg-${task.tagColor}-500/10 text-${task.tagColor}-500`}
                      >
                        {task.tag}
                      </span>
                    </div>
                    <p className="text-sm text-zinc-400 line-clamp-1">
                      {task.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 ml-11 sm:ml-0">
                  <div className="flex -space-x-2">
                    {task.assignees.map((assignee, i) => (
                      <div
                        key={i}
                        className={`w-8 h-8 rounded-full bg-${assignee.color}-500/10 flex items-center justify-center ring-2 ring-black`}
                      >
                        <span
                          className={`text-xs font-medium text-${assignee.color}-500`}
                        >
                          {assignee.initials}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-zinc-400">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm whitespace-nowrap">
                      {task.dueIn} left
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex justify-center">
          <nav className="flex items-center gap-2">
            <button className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors">
              Previous
            </button>
            <div className="flex items-center gap-1">
              {[1, 2, 3].map((page) => (
                <button
                  key={page}
                  className={`px-3 py-1 rounded-lg ${
                    page === 1
                      ? "bg-emerald-600 text-white"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                  } transition-colors`}
                >
                  {page}
                </button>
              ))}
            </div>
            <button className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors">
              Next
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
