import { Sora } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const inter = Sora({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
