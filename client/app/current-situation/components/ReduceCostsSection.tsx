"use client";

import Image from "next/image";

const UTILITY_OPTIONS = [
  { id: "KUA", label: "KUA", logo: "/slide-images/kua-logo.png", image: "/slide-images/kua-content.png" },
  { id: "FPL", label: "FPL", logo: "/slide-images/fpl-logo.png", image: "/slide-images/fpl-content.png" },
  { id: "OUC", label: "OUC", logo: "/slide-images/ouc-logo.png", image: "/slide-images/ouc-content.png" },
  { id: "Duke", label: "Duke Energy", logo: "/slide-images/duke-logo.png", image: "/slide-images/duke-content.png" },
  { id: "TECO", label: "TECO", logo: "/slide-images/teco-logo.png", image: "/slide-images/teco-content.png" },
] as const;

export type UtilityId = (typeof UTILITY_OPTIONS)[number]["id"];

export type ReduceCostsSectionProps = {
  selectedUtility: UtilityId | null;
  onSelectUtility: (id: UtilityId | null) => void;
};

export function ReduceCostsSection({ selectedUtility, onSelectUtility }: ReduceCostsSectionProps) {
  return (
    <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-x-12">
      <div className="flex shrink-0 flex-row flex-wrap gap-4 sm:flex-col sm:gap-4">
        {UTILITY_OPTIONS.map((opt) => (
          <button
            key={opt.id}
            type="button"
            onClick={() => onSelectUtility(selectedUtility === opt.id ? null : opt.id)}
            className={`relative flex h-24 w-24 flex-col items-center justify-center overflow-hidden rounded-xl transition sm:h-28 sm:w-28 ${
              selectedUtility === opt.id ? "ring-2 ring-[#1a365d] ring-offset-2" : "hover:opacity-90"
            }`}
          >
            <Image
              src={opt.logo}
              alt={opt.label}
              fill
              className="object-contain object-center p-2"
              sizes="(max-width: 640px) 8rem, 10rem"
            />
          </button>
        ))}
      </div>
      <div className="min-w-0 flex-1 overflow-hidden rounded-lg bg-white shadow-md">
        {selectedUtility ? (
          <div className="relative w-full aspect-video min-h-[280px] bg-zinc-100">
            <Image
              src={UTILITY_OPTIONS.find((o) => o.id === selectedUtility)!.image}
              alt={`${selectedUtility} content`}
              fill
              className="object-contain object-center"
              sizes="(max-width: 1024px) 100vw, 60rem"
            />
          </div>
        ) : (
          <div className="flex min-h-[280px] items-center justify-center rounded-lg border-2 border-dashed border-zinc-200 bg-zinc-50 text-zinc-500">
            Select a utility to view content
          </div>
        )}
      </div>
    </div>
  );
}
