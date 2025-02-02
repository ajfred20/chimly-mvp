"use client";

import Link from "next/link";
import { ArrowLeft, Play, Clock, Tag } from "lucide-react";

export default function TutorialsPage() {
  const tutorials = [
    {
      title: "Getting Started with Chimly",
      duration: "5:30",
      category: "Basics",
      thumbnail: "/assets/tutorial-1.jpg",
    },
    {
      title: "Advanced AI Features",
      duration: "8:45",
      category: "Advanced",
      thumbnail: "/assets/tutorial-2.jpg",
    },
    {
      title: "Team Collaboration Tips",
      duration: "6:15",
      category: "Teams",
      thumbnail: "/assets/tutorial-3.jpg",
    },
    // Add more tutorials...
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
        <h1 className="text-3xl font-bold text-white mb-8">Video Tutorials</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutorials.map((tutorial, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative aspect-video mb-4">
                <div className="absolute inset-0 bg-zinc-900 rounded-xl overflow-hidden">
                  {/* Replace with actual thumbnail images */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/90 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 text-white ml-1" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 bg-emerald-500/10 text-emerald-500 rounded-full text-xs">
                    {tutorial.category}
                  </span>
                  <span className="flex items-center gap-1 text-zinc-400 text-sm">
                    <Clock className="w-4 h-4" />
                    {tutorial.duration}
                  </span>
                </div>
                <h3 className="text-white font-medium group-hover:text-emerald-500 transition-colors">
                  {tutorial.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
