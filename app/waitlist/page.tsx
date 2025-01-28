"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Twitter } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function WaitlistPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const form = formRef.current;
      if (!form) return;

      // Replace these with your actual EmailJS credentials
      await emailjs.sendForm(
        "service_fpeyuli",
        "template_jat3ees",
        form,
        "IM1qBRmOP9zZWizWv"
      );

      setIsSuccess(true);
      form.reset();
    } catch (err) {
      setError("Something went wrong. Please try again later.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background Avatars */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-4 sm:top-10 sm:left-10 animate-float-slow">
          <Image
            src="/assets/sarah.svg"
            alt=""
            width={40}
            height={40}
            className="rounded-full sm:w-[60px] sm:h-[60px]"
          />
        </div>
        <div className="absolute bottom-20 right-4 sm:bottom-20 sm:right-20 animate-float">
          <Image
            src="/assets/henry.svg"
            alt=""
            width={40}
            height={40}
            className="rounded-full sm:w-[60px] sm:h-[60px]"
          />
        </div>
        <div className="absolute top-1/2 right-4 sm:top-1/3 sm:right-1/4 animate-float-delayed">
          <Image
            src="/assets/muniz.svg"
            alt=""
            width={40}
            height={40}
            className="rounded-full sm:w-[60px] sm:h-[60px]"
          />
        </div>
        <div className="absolute bottom-1/3 left-4 sm:bottom-1/3 sm:left-1/4 animate-float-slow">
          <Image
            src="/assets/ruth.svg"
            alt=""
            width={40}
            height={40}
            className="rounded-full sm:w-[60px] sm:h-[60px]"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-2xl mx-auto text-center px-4">
        {/* Logo */}
        <div className="mb-6 sm:mb-8">
          <Image
            src="/assets/logo.png"
            alt="Chimly"
            width={100}
            height={30}
            className="mx-auto brightness-0 invert sm:w-[140px] sm:h-[40px]"
          />
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tighter text-white mb-4 sm:mb-6">
          Join us now as we <br />
          <span className="bg-gradient-to-r tracking-tighter leading-tight from-emerald-400 to-emerald-600 text-transparent bg-clip-text">
            Simplify the way you work
          </span>{" "}
          <br />
          <span className="bg-gradient-to-r tracking-tighter leading-tight font-fancy from-emerald-400 via-emerald-500 to-emerald-600 text-transparent bg-clip-text">
            With Chimly
          </span>
        </h1>

        {/* Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-4 mt-8 sm:mt-12 max-w-md mx-auto"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Enter your name"
            required
            className="w-full px-4 py-2 sm:py-3 bg-zinc-900/50 border border-zinc-800 rounded-lg text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-sm sm:text-base"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Enter your email"
            required
            className="w-full px-4 py-2 sm:py-3 bg-zinc-900/50 border border-zinc-800 rounded-lg text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-sm sm:text-base"
          />

          <div className="flex items-start gap-2 text-xs sm:text-sm text-zinc-400">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              className="rounded border-zinc-700 mt-1"
            />
            <label htmlFor="consent">
              I agree to receive updates, newsletters, and promotional messages
              from Chimly
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-emerald-600 text-white py-2 sm:py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Joining..." : "Join Waitlist"}
          </button>

          {/* Success Message */}
          {isSuccess && (
            <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-4 py-2 rounded-lg text-sm">
              Thanks for joining! We'll be in touch soon.
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-2 rounded-lg text-sm">
              {error}
            </div>
          )}
        </form>

        {/* Social Link */}
        <div className="mt-6 sm:mt-8 text-center">
          <p className="text-zinc-400 mb-2 text-xs sm:text-sm">
            Follow us for updates
          </p>
          <Link
            href="https://twitter.com/chimly"
            className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 text-sm sm:text-base"
          >
            <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>@chimly</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
