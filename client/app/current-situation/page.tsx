"use client";

import { useState } from "react";
import Image from "next/image";

type StepId =
  | "collection-plant"
  | "generation-plant"
  | "transmission"
  | "distribution"
  | "conversion"
  | "consumption";

const DIAGRAM_IMAGE = "/slide-images/test-graph.png";

const STEPS: { id: StepId; label: string }[] = [
  { id: "collection-plant", label: "Collection Plant" },
  { id: "generation-plant", label: "Generation Plant" },
  { id: "transmission", label: "Transmission" },
  { id: "distribution", label: "Distribution" },
  { id: "conversion", label: "Conversion" },
  { id: "consumption", label: "Consumption" },
];

const STEP_DESCRIPTIONS: Record<StepId, string> = {
  "collection-plant":
    "Energy is collected from sources such as solar, wind, or other renewables at the collection facility before being sent to the generation plant.",
  "generation-plant":
    "Electricity is produced at the generation plant. Large industrial facilities convert collected energy or other fuels into electrical power.",
  transmission:
    "High-voltage power lines carry electricity over long distances from the generation plant to distribution networks. Transmission towers support these lines.",
  distribution:
    "Power is delivered through local distribution networks via utility poles and smaller lines to neighborhoods and individual customers.",
  conversion:
    "High voltage power is stepped down for smaller use through transformers, making it safe and suitable for homes and businesses.",
  consumption:
    "Electricity reaches your home and is used to power lights, appliances, and devices. This is the final step in the supply chain.",
};

const BILL_ITEMS = [
  { label: "Electricity Generation", amount: "$49.16" },
  { label: "DWR Bond Charge", amount: "$2.36" },
  { label: "Transmission", amount: "$11.41" },
  { label: "Distribution", amount: "$40.91" },
  { label: "Public Purpose Programs", amount: "$5.48" },
  { label: "Nuclear Decommissioning", amount: "$0.18" },
  { label: "DWR Revenue Adjustment", amount: "$2.36" },
  { label: "Competition Transition Charge", amount: "$0.46" },
  { label: "Local Generation Charge", amount: "$0.17" },
  { label: "Reliability Services", amount: "$0.11" },
  { label: "TRAC", amount: "$39.31" },
];

// Which bill rows to highlight when each phase is selected
const BILL_HIGHLIGHTS: Record<StepId, string[]> = {
  "collection-plant": ["Nuclear Decommissioning"],
  "generation-plant": ["Electricity Generation", "Local Generation Charge"],
  transmission: ["Transmission", "Competition Transition Charge"],
  distribution: ["Distribution"],
  conversion: ["Competition Transition Charge"],
  consumption: ["TRAC"],
};

// Utility company options: logo for button, image for content card
const UTILITY_OPTIONS = [
  { id: "KUA", label: "KUA", logo: "/slide-images/kua-logo.png", image: "/slide-images/kua-content.png" },
  { id: "FPL", label: "FPL", logo: "/slide-images/fpl-logo.png", image: "/slide-images/fpl-content.png" },
  { id: "OUC", label: "OUC", logo: "/slide-images/ouc-logo.png", image: "/slide-images/ouc-content.png" },
  { id: "Duke", label: "Duke Energy", logo: "/slide-images/duke-logo.png", image: "/slide-images/duke-content.png" },
  { id: "TECO", label: "TECO", logo: "/slide-images/teco-logo.png", image: "/slide-images/teco-content.png" },
] as const;

type UtilityId = (typeof UTILITY_OPTIONS)[number]["id"];

export default function CurrentSituationPage() {
  const [stepIndex, setStepIndex] = useState(0);
  const [selectedUtility, setSelectedUtility] = useState<UtilityId | null>(null);
  const selectedId = STEPS[stepIndex].id;

  const goToNext = () => setStepIndex((i) => Math.min(i + 1, STEPS.length - 1));
  const goToPrev = () => setStepIndex((i) => Math.max(i - 1, 0));

  const highlightedLabels = BILL_HIGHLIGHTS[selectedId];

  return (
    <div className="min-h-screen bg-[#e8e8e8] text-[#1a365d]">
      <div className="flex flex-col gap-2 px-16 py-8 lg:px-24">
        {/* Page title before image */}
        <h1 className="mb-8 max-w-[60.2rem] text-4xl font-bold">
          <span className="text-[#3b82f6]">Your Current</span>
          <br />
          <span className="text-[#1a365d]">Situation</span>
        </h1>

        {/* First card and Sample Utility Bill side by side */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:gap-x-24">
          {/* Single card: image + phase selection + description */}
          <div className="min-w-0 flex-1 overflow-hidden rounded-lg bg-white shadow-md">
          {/* Diagram image */}
          <div className="relative w-full aspect-16/10 min-h-[200px] bg-zinc-100">
            <Image
              src={DIAGRAM_IMAGE}
              alt="Electricity supply chain from Collection Plant to Consumption"
              fill
              className="object-contain object-center"
              sizes="(max-width: 1024px) 100vw, 66vw"
              priority
            />
          </div>

          {/* Current phase: back arrow (left) | title (center) | next arrow (right) */}
          <div className="border-t border-zinc-100 p-4">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-2xl font-semibold text-black">
                {STEPS[stepIndex].label}
              </h2>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={goToPrev}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-zinc-500 transition hover:bg-zinc-100 hover:text-[#1a365d]"
                  aria-label="Previous phase"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={goToNext}
                  disabled={stepIndex === STEPS.length - 1}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-zinc-500 transition hover:bg-zinc-100 hover:text-[#1a365d] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-zinc-500"
                  aria-label="Next phase"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
            <p className="mt-2 text-[#525252]">
              {STEP_DESCRIPTIONS[selectedId]}
            </p>
          </div>
          </div>

          {/* Sample Utility Bill - sticky until bottom of section 1 (this row) */}
          <div className="w-full shrink-0 rounded-lg bg-[#0c1222] p-4 text-white shadow-xl lg:sticky lg:top-20 lg:w-72">
            <h3 className="mb-8 text-2xl font-bold text-white">Sample Utility Bill</h3>
            <ul className="space-y-2 text-sm">
              {BILL_ITEMS.map((item) => {
                const isHighlighted = highlightedLabels.includes(item.label);
                return (
                  <li
                    key={item.label}
                    className={`flex justify-between rounded px-2 py-1 -mx-2 transition-colors ${
                      isHighlighted ? "bg-zinc-600/80 text-zinc-200" : ""
                    }`}
                  >
                    <span className={isHighlighted ? "font-semibold text-zinc-200" : "text-white/95"}>
                      {item.label}
                    </span>
                    <span className={`font-medium tabular-nums ${isHighlighted ? "font-semibold text-zinc-200" : ""}`}>
                      {item.amount}
                    </span>
                  </li>
                );
              })}
              <li className="flex justify-between border-t border-white/20 pt-3 mt-3 text-base font-bold tabular-nums rounded px-2 py-1 -mx-2">
                <span>Total</span>
                <span>$151.91</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Five utility company options + content card (below existing content) */}
        <h2 className="mt-10 mb-8 max-w-[60.2rem] text-4xl font-bold">
          <span className="text-[#3b82f6]">Reduce Costs on your</span>
          <br />
          <span className="text-[#1a365d]">Electric Bill</span>
        </h2>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-x-12">
          {/* Logos vertically on the left */}
          <div className="flex shrink-0 flex-row flex-wrap gap-4 sm:flex-col sm:gap-4">
            {UTILITY_OPTIONS.map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setSelectedUtility(selectedUtility === opt.id ? null : opt.id)}
                className={`relative flex h-24 w-24 flex-col items-center justify-center overflow-hidden rounded-xl transition sm:h-28 sm:w-28 ${
                  selectedUtility === opt.id
                    ? "ring-2 ring-[#1a365d] ring-offset-2"
                    : "hover:opacity-90"
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
          {/* Content on the right */}
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
      </div>
    </div>
  );
}
