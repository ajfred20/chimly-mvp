"use client";

import { Bell, Key, Lock, User, Shield, Smartphone, Globe } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SettingsPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 w-full">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-white">
            Settings
          </h1>
          <p className="text-zinc-400 mt-1">Manage your preferences</p>
        </div>

        {/* Settings Sections */}
        <div className="space-y-6">
          {/* Profile Settings */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 sm:p-6">
            <h2 className="text-lg font-medium text-white mb-6">Profile</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-zinc-400 mb-1">Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm text-zinc-400 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                  placeholder="Your email"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-zinc-400 mb-1">Bio</label>
              <textarea
                className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 resize-none h-24"
                placeholder="Tell us about yourself"
              />
            </div>
          </div>

          {/* Security Section */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 sm:p-6">
            <h2 className="text-lg font-medium text-white mb-6">Security</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-zinc-800 rounded-lg">
                <div className="flex items-center gap-3">
                  <Key className="w-5 h-5 text-zinc-400" />
                  <div>
                    <p className="text-white font-medium">Password</p>
                    <p className="text-sm text-zinc-400">
                      Last changed 3 months ago
                    </p>
                  </div>
                </div>
                <button className="px-4 py-2 bg-zinc-700 text-white rounded-lg hover:bg-zinc-600 transition-colors">
                  Change
                </button>
              </div>
              <div className="flex items-center justify-between p-4 bg-zinc-800 rounded-lg">
                <div className="flex items-center gap-3">
                  <Smartphone className="w-5 h-5 text-zinc-400" />
                  <div>
                    <p className="text-white font-medium">Two-Factor Auth</p>
                    <p className="text-sm text-zinc-400">
                      Extra account security
                    </p>
                  </div>
                </div>
                <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
                  Enable
                </button>
              </div>
            </div>
          </div>

          {/* Preferences Section */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 sm:p-6">
            <h2 className="text-lg font-medium text-white mb-6">Preferences</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-medium">Language</p>
                  <p className="text-sm text-zinc-400">
                    Select your preferred language
                  </p>
                </div>
                <Select defaultValue="en">
                  <SelectTrigger className="w-[180px] bg-zinc-800 border-zinc-700">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-900 border-zinc-800">
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Spanish</SelectItem>
                    <SelectItem value="fr">French</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-medium">Time Zone</p>
                  <p className="text-sm text-zinc-400">
                    Set your local time zone
                  </p>
                </div>
                <Select defaultValue="est">
                  <SelectTrigger className="w-[180px] bg-zinc-800 border-zinc-700">
                    <SelectValue placeholder="Select timezone" />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-900 border-zinc-800">
                    <SelectItem value="est">UTC-5 (Eastern)</SelectItem>
                    <SelectItem value="pst">UTC-8 (Pacific)</SelectItem>
                    <SelectItem value="gmt">UTC+0 (London)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
