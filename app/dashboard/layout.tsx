import { Sidebar } from "@/components/ui/sidebar";
import { Bell } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
          <h1 className="text-lg font-medium">Dashboard</h1>
          <button className="p-2 text-gray-400 hover:text-white transition-colors">
            <Bell className="w-4 h-4" />
          </button>
        </header>
        <div className="flex-1 overflow-auto">{children}</div>
      </main>
    </div>
  );
}
