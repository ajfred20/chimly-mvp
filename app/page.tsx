"use client";

import Link from "next/link";
import { FloatingBackground } from "@/components/ui/floating-background";
import { Clock, Layers, Plus, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

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
            <div className="flex items-center">
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
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tight z-10">
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

          {/* Get Started Button */}
          <Link
            href="/waitlist"
            className="inline-flex bg-white text-black px-8 py-3 rounded-full hover:bg-white/90 transition-colors font-medium"
          >
            Get Started
          </Link>

          {/* Feature Pills */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-2">
            <div className="flex items-center gap-2 bg-zinc-900/80 backdrop-blur-sm px-4 py-1.5 rounded-full border border-zinc-800 text-xs sm:text-sm">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-white whitespace-nowrap">
                48 Hours Delivery
              </span>
            </div>

            <div className="flex items-center gap-2 bg-zinc-900/80 backdrop-blur-sm px-4 py-1.5 rounded-full border border-zinc-800 text-xs sm:text-sm">
              <Layers className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-white whitespace-nowrap">
                Access to Private AI Portal
              </span>
            </div>

            <div className="flex items-center gap-2 bg-zinc-900/80 backdrop-blur-sm px-4 py-1.5 rounded-full border border-zinc-800 text-xs sm:text-sm">
              <Plus className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-white whitespace-nowrap">
                Unlimited AI Requests
              </span>
            </div>
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

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="relative group overflow-hidden bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
            {/* Flickering Grid Background */}
            <div className="absolute inset-0 grid-pattern opacity-40 group-hover:opacity-60 transition-opacity" />

            {/* Content */}
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Workflow?
              </h2>
              <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of teams who have already revolutionized their
                productivity with Chimly AI.
              </p>
              <Link
                href="/waitlist"
                className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full hover:bg-white/90 transition-colors font-medium group"
              >
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-zinc-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Left Side - Company and Year */}
            <div className="flex items-center gap-2">
              <img
                src="/assets/logo.png"
                alt="Chimly"
                className="brightness-0 invert w-full max-w-[70px] sm:max-w-[100px]"
              />
              <div className="flex items-center gap-2">
                <span className="text-zinc-500">•</span>
                <span className="text-zinc-500">
                  {new Date().getFullYear()}
                </span>
              </div>
            </div>

            {/* Center - Links */}
            <div className="flex items-center gap-6 text-sm text-zinc-400 order-first sm:order-none w-full sm:w-auto justify-center">
              <Link
                href="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="hover:text-white transition-colors"
              >
                Terms
              </Link>
              <Link
                href="/contact"
                className="hover:text-white transition-colors"
              >
                Contact
              </Link>
            </div>

            {/* Right Side - Credit */}
            <p className="text-zinc-500 text-sm">
              Built with ❤️ by{" "}
              <Link
                href="https://x.com/iamajfred_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                Aj Fred
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
