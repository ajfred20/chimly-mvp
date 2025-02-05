"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Search,
  Book,
  MessageCircle,
  Mail,
  FileText,
  ChevronRight,
  Youtube,
  Lightbulb,
  HelpCircle,
} from "lucide-react";

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const commonQuestions = [
    {
      question: "How do I get started with Chimly?",
      answer: "Learn the basics of setting up your account and first steps.",
      icon: Lightbulb,
    },
    {
      question: "What are the key features?",
      answer: "Explore the main features and capabilities of our platform.",
      icon: Book,
    },
    {
      question: "How does AI integration work?",
      answer: "Understand how our AI assistant helps with your tasks.",
      icon: HelpCircle,
    },
  ];

  const supportCategories = [
    {
      title: "Documentation",
      description: "Browse our detailed guides and documentation",
      icon: FileText,
      link: "/docs",
      color: "emerald",
    },
    {
      title: "Video Tutorials",
      description: "Watch step-by-step video guides",
      icon: Youtube,
      link: "/tutorials",
      color: "red",
    },
    {
      title: "Community",
      description: "Join our community forum for discussions",
      icon: MessageCircle,
      link: "/community",
      color: "blue",
    },
    {
      title: "Contact Support",
      description: "Get in touch with our support team",
      icon: Mail,
      link: "/contact",
      color: "purple",
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            How can we help you?
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Search our knowledge base or browse categories below to find the
            help you need
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-400" />
            <input
              type="text"
              placeholder="Search for help..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-zinc-900/50 border border-zinc-800 rounded-xl text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
            />
          </div>
        </div>

        {/* Common Questions */}
        <div className="mb-16">
          <h2 className="text-xl font-semibold text-white mb-6">
            Common Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {commonQuestions.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:bg-zinc-900 transition-colors group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-500/10 rounded-lg">
                    <item.icon className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">
                      {item.question}
                    </h3>
                    <p className="text-sm text-zinc-400">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Support Categories */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-6">
            Browse by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {supportCategories.map((category, index) => (
              <Link
                key={index}
                href={category.link}
                className="flex items-center justify-between p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:bg-zinc-900 transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 bg-${category.color}-500/10 rounded-lg`}>
                    <category.icon
                      className={`w-5 h-5 text-${category.color}-500`}
                    />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">
                      {category.title}
                    </h3>
                    <p className="text-sm text-zinc-400">
                      {category.description}
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
              </Link>
            ))}
          </div>
        </div>

        {/* Still Need Help */}
        <div className="mt-16 text-center">
          <p className="text-zinc-400">
            Still need help?{" "}
            <Link
              href="/contact"
              className="text-emerald-500 hover:text-emerald-400 transition-colors"
            >
              Contact our support team
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
