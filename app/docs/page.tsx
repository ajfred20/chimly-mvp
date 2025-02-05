"use client";

import Link from "next/link";
import { ArrowLeft, Search, Book, ChevronRight } from "lucide-react";

export default function DocsPage() {
  const docCategories = [
    {
      title: "Getting Started",
      articles: [
        { title: "Quick Start Guide", readTime: "5 min" },
        { title: "Account Setup", readTime: "3 min" },
        { title: "Basic Navigation", readTime: "4 min" },
      ],
    },
    {
      title: "Features & Tools",
      articles: [
        { title: "AI Assistant Guide", readTime: "7 min" },
        { title: "Task Management", readTime: "6 min" },
        { title: "Team Collaboration", readTime: "5 min" },
      ],
    },
    {
      title: "Advanced Usage",
      articles: [
        { title: "API Integration", readTime: "10 min" },
        { title: "Custom Workflows", readTime: "8 min" },
        { title: "Analytics & Reports", readTime: "6 min" },
      ],
    },
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
        <div className="flex flex-col md:flex-row gap-12">
          {/* Sidebar */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="sticky top-6">
              <h2 className="text-lg font-semibold text-white mb-4">
                Contents
              </h2>
              <nav className="space-y-1">
                {docCategories.map((category, index) => (
                  <a
                    key={index}
                    href={`#${category.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="block px-4 py-2 text-zinc-400 hover:text-white hover:bg-zinc-800/50 rounded-lg transition-colors"
                  >
                    {category.title}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-white mb-8">
              Documentation
            </h1>

            <div className="space-y-12">
              {docCategories.map((category, index) => (
                <section
                  key={index}
                  id={category.title.toLowerCase().replace(/\s+/g, "-")}
                >
                  <h2 className="text-xl font-semibold text-white mb-4">
                    {category.title}
                  </h2>
                  <div className="space-y-3">
                    {category.articles.map((article, articleIndex) => (
                      <Link
                        key={articleIndex}
                        href="#"
                        className="flex items-center justify-between p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:bg-zinc-900 transition-colors group"
                      >
                        <div className="flex items-center gap-3">
                          <Book className="w-5 h-5 text-emerald-500" />
                          <span className="text-white">{article.title}</span>
                        </div>
                        <div className="flex items-center gap-3 text-zinc-400">
                          <span className="text-sm">{article.readTime}</span>
                          <ChevronRight className="w-4 h-4 group-hover:text-white transition-colors" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
