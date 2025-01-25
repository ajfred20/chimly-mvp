import { GithubIcon, SlackIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      {/* Logo */}
      <div className="mb-8">
        <Image
          src="/assets/logo.png"
          alt="Chimly"
          width={140}
          height={140}
          className="brightness-0 invert"
        />
      </div>

      {/* Sign In Card */}
      <div className="w-full max-w-md p-8 rounded-2xl bg-zinc-900 border border-zinc-800">
        <h1 className="text-2xl font-semibold text-white text-center mb-8">
          Sign in
        </h1>

        <form className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm text-zinc-400">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your email address"
              className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-white text-black py-2 rounded-lg font-medium hover:bg-white/90 transition-colors"
          >
            Continue
          </button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-zinc-800"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-zinc-900 px-2 text-zinc-500">OR</span>
            </div>
          </div>

          <div className="space-y-3">
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 px-3 py-2 border border-zinc-700 rounded-lg text-white hover:bg-zinc-800 transition-colors"
            >
              <SlackIcon className="h-4 w-4" />
              Continue with Slack
            </button>

            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 px-3 py-2 border border-zinc-700 rounded-lg text-white hover:bg-zinc-800 transition-colors"
            >
              <GithubIcon className="h-4 w-4" />
              Continue with GitHub
            </button>
          </div>
        </form>

        {/* Sign Up Link */}
        <p className="mt-6 text-center text-sm text-zinc-500">
          Don't have an account?{" "}
          <Link href="/signup" className="text-white hover:text-emerald-500">
            Sign up
          </Link>
        </p>
      </div>

      {/* Footer */}
      <div className="mt-8">
        <Link
          href="/terms"
          className="text-sm text-zinc-500 hover:text-zinc-400"
        >
          Terms of Service and Privacy Policy
        </Link>
      </div>
    </div>
  );
}
