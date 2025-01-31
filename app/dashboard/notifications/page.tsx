"use client";

import { Bell, Mail, MessageSquare, Calendar } from "lucide-react";

export default function NotificationsPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 w-full">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-white">
            Notifications
          </h1>
          <p className="text-zinc-400 mt-1">Stay updated with your tasks</p>
        </div>

        {/* Notifications List */}
        <div className="space-y-4">
          {/* Notification items */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 sm:p-6">
            {/* Notification content */}
          </div>
        </div>
      </div>
    </div>
  );
}
