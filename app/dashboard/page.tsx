import { Sidebar } from "@/components/ui/sidebar";
import { Bell, Mic } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-[#1E1F1E] text-white font-satoshi">
      <Sidebar />
      <main className="flex flex-col flex-1 relative">
        <header className="flex items-center justify-between p-4 border-b border-[#2A2B2A]">
          <button className="p-2 text-gray-400 hover:text-white transition-colors">
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <h1 className="text-lg font-medium">My Day</h1>
          <button className="p-2 text-gray-400 hover:text-white transition-colors">
            <Bell className="w-4 h-4" />
          </button>
        </header>
        <div className="flex-1 p-4">
          {/* Add your dashboard content here */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-[#2A2B2A] p-4 rounded-lg">
              <h2 className="text-lg font-medium mb-2">Today's Tasks</h2>
              <ul className="space-y-2">
                <li className="text-sm text-gray-300">
                  Complete project proposal
                </li>
                <li className="text-sm text-gray-300">Review team updates</li>
                <li className="text-sm text-gray-300">
                  Prepare for client meeting
                </li>
              </ul>
            </div>
            <div className="bg-[#2A2B2A] p-4 rounded-lg">
              <h2 className="text-lg font-medium mb-2">Upcoming Deadlines</h2>
              <ul className="space-y-2">
                <li className="text-sm text-gray-300">
                  Project X - Due in 3 days
                </li>
                <li className="text-sm text-gray-300">
                  Quarterly Report - Due in 1 week
                </li>
              </ul>
            </div>
            <div className="bg-[#2A2B2A] p-4 rounded-lg">
              <h2 className="text-lg font-medium mb-2">Recent Activity</h2>
              <ul className="space-y-2">
                <li className="text-sm text-gray-300">
                  Task "Update documentation" completed
                </li>
                <li className="text-sm text-gray-300">
                  New task assigned: "Prepare presentation"
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-[#1E1F1E]">
          <div className="flex items-center gap-2 px-4 py-3 bg-[#2A2B2A] rounded-full">
            <div className="w-0.5 h-5 bg-emerald-500" />
            <input
              type="text"
              placeholder="What do you want to do today?"
              className="flex-1 bg-transparent outline-none text-gray-300 placeholder-gray-500 text-sm"
            />
            <button className="text-gray-400 hover:text-white transition-colors">
              <Mic className="w-4 h-4 text-emerald-300" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
