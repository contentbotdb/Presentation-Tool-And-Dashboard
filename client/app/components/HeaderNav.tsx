"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/current-situation", label: "Current Situation" },
  { href: "/solution", label: "Solution" },
  { href: "/about-us", label: "About Us" },
  { href: "/projects", label: "Projects" },
];

export function HeaderNav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-6">
      {NAV_LINKS.map((link) => {
        const isActive =
          pathname === link.href ||
          (link.href !== "/" && pathname.startsWith(link.href));
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm font-medium transition-colors duration-150 ${
              isActive
                ? "text-[#3b82f6] underline decoration-2 underline-offset-4"
                : "text-[#1a365d] hover:text-[#3b82f6] hover:underline hover:decoration-2 hover:underline-offset-4"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
