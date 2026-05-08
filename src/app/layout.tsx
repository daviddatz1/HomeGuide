import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://homeguide.app"),
  title: {
    default: "HomeGuide — Fix home problems in minutes, not days",
    template: "%s · HomeGuide",
  },
  description:
    "Snap a photo of any home issue and get instant AI diagnosis, step-by-step repair guidance, and optional live expert video help. Like FaceTime for home repairs.",
  keywords: [
    "home repair",
    "DIY",
    "AI home assistant",
    "handyman video call",
    "fix home problems",
    "home maintenance app",
  ],
  openGraph: {
    title: "HomeGuide — Fix home problems in minutes, not days",
    description:
      "Your home repair assistant in your pocket. Instant AI diagnosis + live expert help.",
    type: "website",
    url: "https://homeguide.app",
    siteName: "HomeGuide",
  },
  twitter: {
    card: "summary_large_image",
    title: "HomeGuide — Fix home problems in minutes, not days",
    description:
      "Your home repair assistant in your pocket. Instant AI diagnosis + live expert help.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-white text-neutral-900 font-sans selection:bg-emerald-200/80 selection:text-emerald-950">
        {children}
      </body>
    </html>
  );
}
