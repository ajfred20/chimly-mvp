"use client";

import Link from "next/link";
import { ArrowLeft, MessageSquare, Users, ThumbsUp, Eye } from "lucide-react";

export default function CommunityPage() {
  const discussions = [
    {
      title: "Best practices for AI task management",
      author: "Sarah Johnson",
      category: "Tips & Tricks",
      replies: 24,
      views: 156,
      likes: 47,
    },
    {
      title: "How to integrate Chimly with Slack?",
      author: "Mike Wilson",
      category: "Integration",
      replies: 18,
      views: 203,
      likes: 32,
    },
    // Add more discussions...
  ];

  return (
    <div className="min-h-screen bg-black">
      <div className="border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <Link
            href="/help"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Help Center
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Community</h1>
          <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
            Start Discussion
          </button>
        </div>

        <div className="space-y-4">
          {discussions.map((discussion, index) => (
            <div
              key={index}
              className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:bg-zinc-900 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="px-3 py-1 bg-emerald-500/10 text-emerald-500 rounded-full text-xs">
                    {discussion.category}
                  </span>
                  <h3 className="text-white font-medium mt-2 hover:text-emerald-500 transition-colors">
                    {discussion.title}
                  </h3>
                  <p className="text-sm text-zinc-400 mt-1">
                    Started by {discussion.author}
                  </p>
                </div>
                <div className="flex items-center gap-4 text-sm text-zinc-400">
                  <div className="flex items-center gap-1">
                    <MessageSquare className="w-4 h-4" />
                    {discussion.replies}
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {discussion.views}
                  </div>
                  <div className="flex items-center gap-1">
                    <ThumbsUp className="w-4 h-4" />
                    {discussion.likes}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
