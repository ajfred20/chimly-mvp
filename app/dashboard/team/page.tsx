"use client";

import { useState } from "react";
import { Mail, MoreVertical, Plus, Search, Shield, ChevronDown } from "lucide-react";
import { toast } from "sonner";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  email: string;
  avatar: string;
  color: string;
  isAdmin?: boolean;
}

const roles = [
  "Admin",
  "Product Manager",
  "Developer",
  "Designer",
  "Content Writer",
  "Viewer"
];

export default function TeamPage() {
  const [showRoleMenu, setShowRoleMenu] = useState<string | null>(null);
  const [members, setMembers] = useState<TeamMember[]>([
    {
      id: "1",
      name: "Sarah Johnson",
      role: "Product Manager",
      email: "sarah@chimly.ai",
      avatar: "SJ",
      color: "emerald",
      isAdmin: true,
    },
    // ... other members
  ]);

  const handleRoleChange = async (memberId: string, newRole: string) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("/api/team/roles", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          userId: memberId,
          role: newRole,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update role");
      }

      setMembers(members.map(member => 
        member.id === memberId ? { ...member, role: newRole } : member
      ));
      setShowRoleMenu(null);
      toast.success(`Updated role to ${newRole}`);
    } catch (error) {
      console.error("Error updating role:", error);
      toast.error("Failed to update role");
    }
  };

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
          {members.map((member) => (
            <div
              key={member.email}
              className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl hover:bg-zinc-800/50 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full bg-${member.color}-500/10 flex items-center justify-center`}>
                    <span className={`text-lg font-medium text-${member.color}-500`}>
                      {member.avatar}
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-white font-medium">{member.name}</h3>
                      {member.isAdmin && (
                        <Shield className="w-4 h-4 text-emerald-500" />
                      )}
                    </div>
                    <div className="relative">
                      <button
                        onClick={() => setShowRoleMenu(member.id)}
                        className="text-sm text-zinc-400 flex items-center gap-1 hover:text-white transition-colors"
                      >
                        {member.role}
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      
                      {showRoleMenu === member.id && (
                        <div className="absolute top-full left-0 mt-1 w-48 py-1 bg-zinc-800 rounded-lg shadow-lg z-10">
                          {roles.map((role) => (
                            <button
                              key={role}
                              onClick={() => handleRoleChange(member.id, role)}
                              className="w-full px-4 py-2 text-sm text-left text-zinc-300 hover:bg-zinc-700 hover:text-white transition-colors"
                            >
                              {role}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
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
