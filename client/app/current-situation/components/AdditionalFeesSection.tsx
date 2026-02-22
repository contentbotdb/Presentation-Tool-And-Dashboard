"use client";

import Image from "next/image";
import Link from "next/link";

const ADDITIONAL_FEES_IMAGE = "/slide-images/additional-fees-and-surcharges.png";

// Link text from the slide's bottom banner; replace href with the actual URL if known
const BANNER_LINK = {
  href: "https://www.fpl.com/",
  text: "Florida Electric Bills Will increase for 2025. Here's why",
};

export function AdditionalFeesSection() {
  return (
    <div className="w-full max-w-340">
      <div className="w-full">
        <Image
          src={ADDITIONAL_FEES_IMAGE}
          alt="Additional Fees & Surcharges - Storm restoration costs and Florida electric bills"
          width={1200}
          height={675}
          className="h-auto w-auto max-w-full"
          sizes="(max-width: 1024px) 100vw, 85rem"
        />
      </div>
      <div className="border-t border-zinc-100 bg-[#1a365d] px-6 py-3">
        <Link
          href={BANNER_LINK.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-white hover:underline"
        >
          {BANNER_LINK.text}
          <span className="inline-block size-4 shrink-0" aria-hidden>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
}
