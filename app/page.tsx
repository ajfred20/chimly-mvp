"use client";

import Link from "next/link";
import { FloatingBackground } from "@/components/ui/floating-background";
import { Clock, Layers, Plus } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-zinc-900">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-white">
              <img
                src="/assets/logo.png"
                alt="Chimly"
                className="w-full max-w-[100px] sm:max-w-[150px]"
              />
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="#"
                className="text-white/70 hover:text-white transition-colors"
              >
                Achievements
              </Link>
              <Link
                href="#"
                className="text-white/70 hover:text-white transition-colors"
              >
                Our Work
              </Link>
              <Link
                href="#"
                className="text-white/70 hover:text-white transition-colors"
              >
                Comparision
              </Link>
              <Link
                href="#"
                className="text-white/70 hover:text-white transition-colors"
              >
                FAQs
              </Link>
              <Link
                href="/waitlist"
                className="bg-black text-white px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20">
        <FloatingBackground />

        {/* Available Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8">
          <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm text-white tracking-tight font-medium px-4 py-2 lg:px-6 lg:py-3 rounded-full text-sm lg:text-base border border-white/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Simplify your team&apos;s workflow now
          </div>
        </div>

        {/* Hero Content */}
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Increase your Team&apos;s <br />
            Productivity,{" "}
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-300 blur-2xl opacity-40 animate-gradient-x"></span>
              <span className="relative">Without the Burnout</span>
            </span>
          </h1>
          <p className="text-lg text-white/60 mb-8 max-w-2xl mx-auto">
            Take your team&apos;s productivity to the next level with Chimly.
            With our AI-powered tools, you can automate repetitive tasks,
            streamline workflows, and boost your team&apos;s efficiency.
          </p>
          <Link
            href="/waitlist"
            className="inline-flex bg-white text-black px-8 py-3 rounded-full hover:bg-white/90 transition-colors font-medium"
          >
            Get Started
          </Link>
        </div>

        {/* Feature Pills */}
        <div className="absolute bottom-10 sm:bottom-20 left-1/2 -translate-x-1/2 flex flex-col sm:flex-row items-center gap-2 sm:gap-4 md:gap-8">
          <div className="flex items-center gap-1 sm:gap-2 bg-white/5 backdrop-blur-sm px-2 py-1 sm:px-4 sm:py-2 rounded-full border border-white/10">
            <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400" />
            <span className="text-white text-xs sm:text-sm">
              48 Hours Delivery
            </span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2 bg-white/5 backdrop-blur-sm px-2 py-1 sm:px-4 sm:py-2 rounded-full border border-white/10">
            <Layers className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400" />
            <span className="text-white text-xs sm:text-sm">
              Access to Private AI Portal
            </span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2 bg-white/5 backdrop-blur-sm px-2 py-1 sm:px-4 sm:py-2 rounded-full border border-white/10">
            <Plus className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400" />
            <span className="text-white text-xs sm:text-sm">
              Unlimited AI Requests
            </span>
          </div>
        </div>
      </div>

      {/* Goals Section */}
      <section className="w-full py-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            These are Our Goals
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Goal Card 1 */}
            <div className="group relative overflow-hidden rounded-2xl bg-zinc-900/50 border border-zinc-800/50 p-8 hover:border-emerald-500/20 transition-colors">
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-2xl font-bold text-white mb-4">
                  100% Remote Focus
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  Empower teams to achieve deep work and maintain peak
                  productivity from anywhere in the world.
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Goal Card 2 */}
            <div className="group relative overflow-hidden rounded-2xl bg-zinc-900/50 border border-zinc-800/50 p-8 hover:border-emerald-500/20 transition-colors">
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-2xl font-bold text-white mb-4">
                  More in Less Time
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  Optimize workflows and automate repetitive tasks to help teams
                  accomplish more with less effort.
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Goal Card 3 */}
            <div className="group relative overflow-hidden rounded-2xl bg-zinc-900/50 border border-zinc-800/50 p-8 hover:border-emerald-500/20 transition-colors">
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Smart Collaboration
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  Foster seamless team coordination with AI-powered tools that
                  enhance communication and productivity.
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>

          {/* Vision Statement */}
          <div className="mt-16 text-center">
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Our vision is to{" "}
              <span className="text-emerald-400 font-semibold">
                revolutionize
              </span>{" "}
              how teams work by providing{" "}
              <span className="text-emerald-400 font-semibold">
                intelligent solutions
              </span>{" "}
              that adapt to your unique needs.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Marquee */}
      <section className="w-full py-16 bg-zinc-900/50 border-t border-b border-zinc-800/50 overflow-hidden">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Trusted by Teams Worldwide
          </h2>
          <p className="text-zinc-400">
            See what our users have to say about Chimly
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-black to-transparent z-10"></div>

          {/* Scrolling Content */}
          <motion.div
            className="flex"
            animate={{
              x: [0, -1035],
            }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {/* First Set */}
            <div className="flex gap-6 px-6">
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 w-[400px] flex-shrink-0">
                <p className="text-white/80 mb-4">
                  "Chimly has transformed how our team collaborates. The AI
                  features are incredibly intuitive."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <span className="text-emerald-500 font-semibold">JD</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">John Doe</p>
                    <p className="text-zinc-500 text-sm">
                      Product Manager, Tech Co
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 w-[400px] flex-shrink-0">
                <p className="text-white/80 mb-4">
                  "The automation features have saved us countless hours. It's
                  like having an extra team member."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <span className="text-emerald-500 font-semibold">AS</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">Alice Smith</p>
                    <p className="text-zinc-500 text-sm">CEO, StartupX</p>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 w-[400px] flex-shrink-0">
                <p className="text-white/80 mb-4">
                  "Our productivity has increased by 40% since implementing
                  Chimly. The results speak for themselves."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <span className="text-emerald-500 font-semibold">RJ</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">Robert Johnson</p>
                    <p className="text-zinc-500 text-sm">Team Lead, Agency Y</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Duplicate Set for Seamless Loop */}
            <div className="flex gap-6 px-6">
              {/* Same testimonials repeated */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 w-[400px] flex-shrink-0">
                <p className="text-white/80 mb-4">
                  "Chimly has transformed how our team collaborates. The AI
                  features are incredibly intuitive."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <span className="text-emerald-500 font-semibold">JD</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">John Doe</p>
                    <p className="text-zinc-500 text-sm">
                      Product Manager, Tech Co
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 w-[400px] flex-shrink-0">
                <p className="text-white/80 mb-4">
                  "The automation features have saved us countless hours. It's
                  like having an extra team member."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <span className="text-emerald-500 font-semibold">AS</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">Alice Smith</p>
                    <p className="text-zinc-500 text-sm">CEO, StartupX</p>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 w-[400px] flex-shrink-0">
                <p className="text-white/80 mb-4">
                  "Our productivity has increased by 40% since implementing
                  Chimly. The results speak for themselves."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <span className="text-emerald-500 font-semibold">RJ</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">Robert Johnson</p>
                    <p className="text-zinc-500 text-sm">Team Lead, Agency Y</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
