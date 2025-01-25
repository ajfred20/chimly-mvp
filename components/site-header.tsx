"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-zinc-800">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo on left */}
        <Link href="/" className="flex-shrink-0">
          <img
            className="w-full max-w-[80px]"
            src="/assets/logo.png"
            alt="Chimly Logo"
          />
        </Link>

        {/* Centered Navigation */}
        <nav className="hidden md:flex items-center justify-center flex-1 gap-8">
          <Link
            href="/features"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            Features
          </Link>
          <Link
            href="/pricing"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/about"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            About
          </Link>
        </nav>

        {/* Right side button */}
        <div className="flex items-center">
          <Button
            size="sm"
            className="hidden md:inline-flex text-white bg-emerald-500 hover:bg-emerald-500/90 rounded-full"
          >
            Get Started
          </Button>
          <button
            className="md:hidden text-zinc-400 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 py-4 bg-black border-b border-zinc-800">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/features"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/about"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              About
            </Link>
            <Button
              size="sm"
              className="text-white bg-emerald-500 hover:bg-emerald-500/90 w-full rounded-full"
            >
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
