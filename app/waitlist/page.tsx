"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Twitter, ArrowLeft } from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

// List of allowed email domains
const ALLOWED_DOMAINS = [
  "gmail.com",
  "yahoo.com",
  "hotmail.com",
  "outlook.com",
  "icloud.com",
  "aol.com",
  "protonmail.com",
];

export default function WaitlistPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string) => {
    const domain = email.split("@")[1]?.toLowerCase();
    if (!domain || !ALLOWED_DOMAINS.includes(domain)) {
      toast.error("Please use a personal email address");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = formRef.current;
      if (!form) return;

      const email = form.user_email.value;
      if (!validateEmail(email)) {
        setIsSubmitting(false);
        return;
      }

      const templateParams = {
        user_name: form.user_name.value,
        user_email: email,
        consent: form.consent.checked ? "Yes" : "No",
        signup_time: new Date().toLocaleString(),
      };

      await emailjs.send(
        "service_fpeyuli",
        "template_21p6fmi",
        templateParams,
        "IM1qBRmOP9zZWizWv"
      );

      toast.success("Thanks for joining! We'll be in touch soon.");
      form.reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
      console.error("EmailJS Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Back Button */}
      <div className="absolute top-6 left-6 z-50">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Background Avatars */}
      <div className="absolute inset-0">
        <div className="absolute top-24 left-4 sm:top-14 sm:left-10 animate-float-slow">
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
