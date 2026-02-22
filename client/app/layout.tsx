import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import { HeaderNav } from "./components/HeaderNav";
import "@flaticon/flaticon-uicons/css/thin/rounded.css";
import "@flaticon/flaticon-uicons/css/solid/rounded.css";
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
          <Link
            href="/"
            className="text-xl font-bold text-[#1a365d] transition-colors duration-150 hover:text-[#3b82f6]"
          >
            Protek
          </Link>
          <HeaderNav />
        </header>
        {children}
        <footer className="border-t border-zinc-200 bg-white px-6 py-6 text-center text-sm text-zinc-500">
          <p>© {new Date().getFullYear()} Protek. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
