"use client";

import Image from "next/image";

const BILL_2020_IMAGE = "/slide-images/2020-fpl-bill.png";
const BILL_2025_IMAGE = "/slide-images/2025-fpl-bill.png";

export function InflationRateComparisonSection() {
  return (
    <div className="mt-20 w-full max-w-340">
      <div className="relative">
        <div className="absolute left-0 right-0 top-1/2 z-0 -translate-y-1/2 rounded-4xl bg-zinc-500 px-6 py-5">
          <p className="max-w-[24%] text-left text-lg font-bold text-white">
            Typical monthly bill of 1,000 kWh
          </p>
        </div>
        <div className="relative z-10 ml-[25%] flex flex-col items-center gap-6 lg:flex-row lg:justify-center lg:gap-10">
          <div className="flex flex-col lg:flex-1 lg:max-w-[45%]">
            <p className="mb-2 text-xl font-bold text-[#3b82f6] lg:text-2xl">2020 1,000 kWh</p>
            <div className="w-full min-h-[420px]">
              <Image
                src={BILL_2020_IMAGE}
                alt="FPL typical 1,000 kWh residential bill, May 2020"
                width={500}
                height={900}
                className="h-auto w-auto max-w-full"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-1 lg:max-w-[45%]">
            <p className="mb-2 text-xl font-bold text-[#3b82f6] lg:text-2xl">2025 1,000 kWh</p>
            <div className="w-full min-h-[420px]">
              <Image
                src={BILL_2025_IMAGE}
                alt="FPL typical 1,000 kWh residential bill, January 2025"
                width={500}
                height={900}
                className="h-auto w-auto max-w-full"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
