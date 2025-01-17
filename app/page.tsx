import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-900 flex flex-col items-center justify-center p-4">
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
        <Button
          className="bg-[#41b869] hover:bg-[#41b869]/90 text-white mt-4 w-full max-w-32 mx-auto"
          size="sm"
        >
          Get Started
        </Button>
      </header>

      <div className="relative w-full max-w-4xl aspect-[1.6] mx-auto">
        <img
          src="/assets/dashboard.png"
          alt="Task Manager Interface"
          className="w-full h-auto max-h-[50vh] rounded-lg object-cover border-2 border-white/20"
        />
      </div>
    </div>
  );
}
