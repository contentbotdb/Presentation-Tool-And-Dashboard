import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Protek",
  description: "Protek presentation and dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="sticky top-0 z-20 flex items-center justify-between border-b border-zinc-200 bg-white px-6 py-5 shadow-sm">
          <Link href="/" className="text-xl font-bold text-[#1a365d] hover:text-[#2c5282]">
            Protek
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/current-situation" className="text-sm font-medium text-[#1a365d] hover:text-[#2c5282] hover:underline">
              Current Situation
            </Link>
            <Link href="/solution" className="text-sm font-medium text-[#1a365d] hover:text-[#2c5282] hover:underline">
              Solution
            </Link>
            <Link href="/about-us" className="text-sm font-medium text-[#1a365d] hover:text-[#2c5282] hover:underline">
              About Us
            </Link>
            <Link href="/projects" className="text-sm font-medium text-[#1a365d] hover:text-[#2c5282] hover:underline">
              Projects
            </Link>
          </nav>
        </header>
        {children}
        <footer className="border-t border-zinc-200 bg-white px-6 py-6 text-center text-sm text-zinc-500">
          <p>© {new Date().getFullYear()} Protek. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
