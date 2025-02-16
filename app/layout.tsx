import { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Chimly - AI Task Management",
  description: "Manage your tasks and schedule efficiently with AI assistance",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://chimly.com"),
  keywords: ["AI", "Task Management", "Productivity", "Automation", "Workflow"],
  authors: [{ name: "Chimly AI" }],
  creator: "Aj Fred",
  publisher: "Aj Fred",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chimly.com",
    siteName: "Chimly",
    title: "Chimly - AI Task Management",
    description: "Manage your tasks and schedule efficiently with AI assistance",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chimly - AI Task Management",
    description: "Manage your tasks and schedule efficiently with AI assistance",
    images: ["/og-image.jpg"],
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
      <head>
        <meta
          property="og:title"
          content="Chimly - AI Task Management"
        />
        <meta
          property="og:description"
          content="Manage your tasks and schedule efficiently with AI assistance"
        />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://chimly.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Chimly - AI Task Management"
        />
        <meta
          name="twitter:description"
          content="Manage your tasks and schedule efficiently with AI assistance"
        />
        <meta name="twitter:image" content="/og-image.jpg" />
      </head>
      <body>
        {children}
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: "#18181b",
              border: "1px solid #27272a",
              color: "#fff",
            },
          }}
        />
      </body>
    </html>
  );
}
