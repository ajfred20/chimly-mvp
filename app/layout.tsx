import { Onest } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";

const inter = Onest({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chimly AI | Your AI-Powered Task Assistant",
  description:
    "Handle your daily tasks like a pro with our loaded AI features. Chimly helps you organize, automate, and optimize your workflow.",
  keywords: ["AI", "Task Management", "Productivity", "Automation", "Workflow"],
  authors: [{ name: "Chimly AI" }],
  creator: "Aj Fred",
  publisher: "Aj Fred",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chimly.vercel.app",
    siteName: "Chimly AI",
    title: "Chimly AI | Your AI-Powered Task Assistant",
    description:
      "Handle your daily tasks like a pro with our loaded AI features",
    images: [
      {
        url: "/assets/logo.png", // Make sure to add this image to your public/assets folder
        width: 1200,
        height: 630,
        alt: "Chimly AI Dashboard Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chimly AI | Your AI-Powered Task Assistant",
    description:
      "Handle your daily tasks like a pro with our loaded AI features",
    images: ["/assets/logo.png"],
    creator: "@iamajfred_",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

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
