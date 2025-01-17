import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="text-white/50 text-sm font-medium hover:text-white"
          >
            <img
              className="w-full max-w-[80px]"
              src="/assets/logo.png"
              alt="Chimly Logo"
            />
          </Link>
        </div>
        <Button
          size="sm"
          className="text-white bg-[#41b869] hover:bg-[#41b869]/90"
        >
          Get Started
        </Button>
      </div>
    </header>
  );
}
