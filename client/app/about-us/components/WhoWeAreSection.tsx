"use client";

import Image from "next/image";

const CREDENTIALS = [
  { label: "BBB A+ Rating", sub: "BBB ACCREDITED BUSINESS", logo: "/slide-images/BBB-logo.png", width: 144, height: 72 },
  { label: "Inc. 5000 Regionals", sub: "FLORIDA 2021", logo: "/slide-images/florida-regionals.png", width: 176, height: 88 },
  { label: "Google Rating 4.9", sub: "+900 Reviews", logo: "/slide-images/google-rating.png", width: 208, height: 104 },
];

const COMPARISON_ROWS = [
  { criterion: "25-Years Performance Warranty", equity: true, average: true },
  { criterion: "25-Years Products Warranty", equity: true, average: true },
  { criterion: "25-Year Roof Penetration Warranty", equity: true, average: false },
  { criterion: "25-Years Services Warranty", equity: true, average: false },
  { criterion: "25-Years Workmanship", equity: true, average: false },
  { criterion: "25-Years Monitoring Services", equity: true, average: false },
  { criterion: "INC 5000", equity: true, average: false },
  { criterion: "No Subcontractors", equity: true, average: false },
  { criterion: "25-Years Warranty Enphase MicroInverter", equity: true, average: true },
];

export function WhoWeAreSection() {
  return (
    <div className="w-full pb-4 ">
      <p className="mb-4 text-sm font-semibold text-zinc-500">Solar Energy Contractors</p>
      <div className="flex w-full flex-col justify-between lg:flex-row">
        <div className="flex flex-col gap-6 lg:shrink-0 lg:flex-row lg:gap-8">
          <div className="flex flex-col gap-8 justify-around">
            <div className="flex flex-col gap-8 justify-around">
              {CREDENTIALS.map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <div
                    className="relative shrink-0 overflow-hidden rounded-xl"
                    style={{ width: c.width, height: c.height }}
                  >
                    <Image
                      src={c.logo}
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-around gap-4 lg:justify-center ">
            <div className="flex items-center gap-4 rounded-3xl bg-white p-6 shadow-md">
              <p className="text-3xl font-bold text-[#1a365d]">12</p>
              <p className="text-sm font-medium text-[#1a365d]">Years in Business</p>
            </div>
            <div className="flex items-center gap-4 rounded-3xl bg-white p-4 shadow-md">
              <div className="relative h-14 w-14 shrink-0">
                <Image
                  src="/slide-images/hand-diamond.png"
                  alt=""
                  fill
                  className="object-contain"
                  sizes="56px"
                />
              </div>
              <p className="font-semibold text-[#1a365d]">Best Value Guaranteed</p>
            </div>
          </div>
        </div>
        <div className="lg:shrink-0">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[320px] border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-zinc-200">
                  <th className="py-3 text-left font-semibold text-zinc-700">Warranty &amp; Service</th>
                  <th className="py-3 text-center font-semibold text-[#1a365d]">Equity Solar</th>
                  <th className="py-3 text-center font-semibold text-zinc-600">Average Solar Company</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.criterion} className="border-b border-zinc-100">
                    <td className="py-2.5 text-zinc-700">{row.criterion}</td>
                    <td className="py-2.5 text-center">
                      <span className={row.equity ? "text-green-600" : "text-red-500"}>
                        {row.equity ? "✓" : "✗"}
                      </span>
                    </td>
                    <td className="py-2.5 text-center">
                      <span className={row.average ? "text-green-600" : "text-red-500"}>
                        {row.average ? "✓" : "✗"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-zinc-500">
            *When you select and sign a lease contract all the warranties will be provided by the
            leasing financial company.
          </p>
          <p className="mt-1 text-xs text-zinc-500">
            *By choosing the ULTIMATE PROTECTION PLAN, Equity Solar will provide this exceptional
            warranties.
          </p>
          <p className="mt-4 font-medium text-[#1a365d]">Building a clean energy economy.</p>
        </div>
      </div>
    </div>
  );
}
