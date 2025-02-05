"use client";

import { Mail, MoreVertical, Plus, Search } from "lucide-react";

export default function TeamPage() {
  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-white">Team</h1>
          <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Invite Member
          </button>
        </div>

        {/* Search */}
        <div className="relative max-w-md mb-8">
          <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search team members..."
            className="w-full pl-10 pr-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
          />
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Team Member Card */}
          {[
            {
              name: "Sarah Johnson",
              role: "Product Designer",
              email: "sarah@chimly.ai",
              avatar: "SJ",
              color: "emerald",
            },
            {
              name: "Mike Wilson",
              role: "Frontend Developer",
              email: "mike@chimly.ai",
              avatar: "MW",
              color: "blue",
            },
            {
              name: "Anna Brown",
              role: "Project Manager",
              email: "anna@chimly.ai",
              avatar: "AB",
              color: "purple",
            },
            // Add more team members as needed
          ].map((member) => (
            <div
              key={member.email}
              className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl hover:bg-zinc-800/50 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-full bg-${member.color}-500/10 flex items-center justify-center`}
                  >
                    <span
                      className={`text-lg font-medium text-${member.color}-500`}
                    >
                      {member.avatar}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-white font-medium">{member.name}</h3>
                    <p className="text-sm text-zinc-400">{member.role}</p>
                  </div>
                </div>
                <button className="p-1 text-zinc-400 hover:text-white rounded-lg transition-colors">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
              <a
                href={`mailto:${member.email}`}
                className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                {member.email}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
