"use client";

import { useState } from "react";
import {
  SectionTitle,
  CurrentSituationSection,
  MAX_STEP_INDEX,
  ReduceCostsSection,
  InflationRateIncreasesSection,
  InflationRateComparisonSection,
  AdditionalFeesSection,
  type UtilityId,
} from "./components";

export default function CurrentSituationPage() {
  const [stepIndex, setStepIndex] = useState(0);
  const [selectedUtility, setSelectedUtility] = useState<UtilityId | null>("KUA");

  const goToNext = () => setStepIndex((i) => Math.min(i + 1, MAX_STEP_INDEX));
  const goToPrev = () => setStepIndex((i) => Math.max(i - 1, 0));

  return (
    <div className="min-h-screen bg-[#e8e8e8] text-[#1a365d]">
      <div className="flex flex-col gap-2 px-16 py-8 lg:px-24">
        <h1 className="mb-8 max-w-[60.2rem] text-4xl font-bold">
          <span className="text-[#3b82f6]">Your Current</span>
          <br />
          <span className="text-[#1a365d]">Situation</span>
        </h1>

        <CurrentSituationSection stepIndex={stepIndex} onPrev={goToPrev} onNext={goToNext} />

        <SectionTitle primary="Reduce Costs on your" secondary="Electric Bill" className="mt-20 mb-8" />
        <ReduceCostsSection
          selectedUtility={selectedUtility}
          onSelectUtility={setSelectedUtility}
        />

        <SectionTitle primary="Inflation &" secondary="Rate Increases" className="mt-20 mb-8" />
        <InflationRateIncreasesSection />
        <InflationRateComparisonSection />

        <SectionTitle primary="Additional Fees &" secondary="Surcharges" className="mt-20 mb-8" />
        <AdditionalFeesSection />
      </div>
    </div>
  );
}
