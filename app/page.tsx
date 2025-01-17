import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FloatingBackground } from "@/components/ui/floating-background";
import { Hourglass } from "lucide-react";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-900">
      {/* Hero Section with Floating Background */}
      <div className="relative h-screen">
        <SiteHeader />
        <FloatingBackground />
        <div className="relative flex flex-col items-center justify-center h-full p-4">
          <header className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <img
                className="w-full max-w-[100px]"
                src="/assets/logo.png"
                alt="Chimly Logo"
              />
            </div>
            <h1 className="text-4xl font-semibold text-white mb-3">
              Your tasks, simplified
            </h1>
            <p className="text-white/50">
              Create, manage, and complete your to-do lists with ease.
            </p>
            <Link href="/dashboard">
              <Button
                className="bg-[#41b869] hover:bg-[#41b869]/90 text-white mt-4 w-full max-w-32 mx-auto"
                size="sm"
              >
                Get Started
              </Button>
            </Link>
          </header>

          <div className="relative w-full max-w-4xl aspect-[1.6] mx-auto">
            <img
              src="/assets/dashboard.png"
              alt="Task Manager Interface"
              className="w-full h-auto max-h-[50vh] rounded-lg object-cover border-2 border-white/20"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="w-full max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold text-white text-center mb-12">
          Features that empower you
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-zinc-800/50 border border-zinc-700/50 
                        transition-all duration-300 hover:shadow-[0_0_30px_rgba(65,184,105,0.2)]
                        hover:border-[#41b869]/30 group"
            >
              <div className="text-[#41b869] mb-4  transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-white/50">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
      </svg>
    ),
    title: "Smart Task Management",
    description:
      "Organize your tasks with intelligent categorization and priority settings.",
  },
  {
    icon: <Hourglass />,
    title: "Time Tracking",
    description:
      "Track time spent on tasks and analyze your productivity patterns.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
      </svg>
    ),
    title: "Collaboration Tools",
    description:
      "Share and collaborate on tasks with team members in real-time.",
  },
];
