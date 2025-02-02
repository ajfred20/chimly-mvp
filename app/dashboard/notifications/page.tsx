"use client";

import { useState } from "react";
import {
  Bell,
  Mail,
  MessageSquare,
  Calendar,
  CheckCircle,
  AlertCircle,
  X,
} from "lucide-react";

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "task",
      title: "Task Completed",
      message: "Sarah completed 'Homepage Redesign' task",
      time: "2 minutes ago",
      read: false,
      icon: CheckCircle,
      color: "emerald",
    },
    {
      id: 2,
      type: "mention",
      title: "New Mention",
      message: "Mike mentioned you in 'API Integration' task",
      time: "1 hour ago",
      read: false,
      icon: MessageSquare,
      color: "blue",
    },
    {
      id: 3,
      type: "reminder",
      title: "Meeting Reminder",
      message: "Team standup meeting in 30 minutes",
      time: "25 minutes ago",
      read: true,
      icon: Calendar,
      color: "purple",
    },
    {
      id: 4,
      type: "alert",
      title: "System Alert",
      message: "Your storage is almost full. Consider upgrading your plan.",
      time: "2 hours ago",
      read: true,
      icon: AlertCircle,
      color: "amber",
    },
  ]);

  const markAsRead = (id: number) => {
    setNotifications(
      notifications.map((notif) =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const removeNotification = (id: number) => {
    setNotifications(notifications.filter((notif) => notif.id !== id));
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="p-4 sm:p-6 lg:p-8 w-full">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white">
                Notifications
              </h1>
              <p className="text-zinc-400 mt-1">Stay updated with your tasks</p>
            </div>
            {unreadCount > 0 && (
              <span className="px-3 py-1 bg-emerald-500/10 text-emerald-500 rounded-full text-sm">
                {unreadCount} unread
              </span>
            )}
          </div>
        </div>

        {/* Notifications List */}
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl transition-colors ${
                !notification.read ? "bg-zinc-900" : ""
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`p-2 bg-${notification.color}-500/10 rounded-lg flex-shrink-0`}
                >
                  <notification.icon
                    className={`w-5 h-5 text-${notification.color}-500`}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-white font-medium">
                        {notification.title}
                      </h3>
                      <p className="text-sm text-zinc-400 mt-1">
                        {notification.message}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-zinc-500 whitespace-nowrap">
                        {notification.time}
                      </span>
                      <button
                        onClick={() => removeNotification(notification.id)}
                        className="p-1 text-zinc-500 hover:text-white rounded-lg transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  {!notification.read && (
                    <button
                      onClick={() => markAsRead(notification.id)}
                      className="text-xs text-emerald-500 hover:text-emerald-400 mt-2 transition-colors"
                    >
                      Mark as read
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}

          {notifications.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-zinc-800/50 flex items-center justify-center mx-auto mb-4">
                <Bell className="w-8 h-8 text-zinc-400" />
              </div>
              <h3 className="text-white font-medium">No notifications</h3>
              <p className="text-zinc-400 text-sm mt-1">
                You're all caught up! Check back later for updates.
              </p>
            </div>
          )}
        </div>

        {notifications.length > 0 && (
          <div className="mt-6 text-center">
            <button className="text-zinc-400 hover:text-white text-sm transition-colors">
              Clear all notifications
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
