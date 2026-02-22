"use client";

import Link from "next/link";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Section copy and source links (aligned with inflation graph design)
const INFLATION_SECTION = {
  caption: "20% annual increase",
  legend: {
    teco: "TECO",
    duke: "Duke Energy",
    floridaAvg: "Florida average",
  },
  sourceText: "Annual percent increase based on average cost per customer (cents per kWh).",
  sources: [
    { name: "U.S. Energy Information Administration", url: "https://www.eia.gov/" },
    { name: "WGCU", url: "https://www.wgcu.org/" },
    { name: "Miami Herald Florida", url: "https://www.miamiherald.com/" },
  ] as const,
} as const;

const INFLATION_CHART_DATA = [
  { year: 2014, teco: 3.5, duke: 6.5, floridaAvg: 5 },
  { year: 2015, teco: -1, duke: -4, floridaAvg: -3 },
  { year: 2016, teco: -6, duke: -5, floridaAvg: -4 },
  { year: 2017, teco: 2, duke: 3.5, floridaAvg: 4 },
  { year: 2018, teco: 4, duke: 0.5, floridaAvg: -1 },
  { year: 2019, teco: -2, duke: 2.5, floridaAvg: 1 },
  { year: 2020, teco: -7, duke: -0.5, floridaAvg: -4 },
  { year: 2021, teco: 13, duke: 1, floridaAvg: 9 },
  { year: 2022, teco: 18, duke: 16, floridaAvg: 17 },
  { year: 2023, teco: 14, duke: 8, floridaAvg: 9 },
];

function InflationChart() {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <LineChart data={INFLATION_CHART_DATA} margin={{ top: 24, right: 24, bottom: 40, left: 44 }}>
        <CartesianGrid strokeDasharray="4 4" stroke="#e5e7eb" vertical={false} />
        <XAxis
          dataKey="year"
          tick={{ fill: "#71717a", fontSize: 12 }}
          axisLine={{ stroke: "#d1d5db" }}
          tickLine={false}
        />
        <YAxis
          domain={[-5, 20]}
          tick={{ fill: "#71717a", fontSize: 12 }}
          axisLine={{ stroke: "#d1d5db" }}
          tickLine={false}
          tickFormatter={(v) => `${v}%`}
        />
        <Tooltip
          formatter={(value: number | undefined) => (value != null ? `${value}%` : "")}
          labelFormatter={(year) => `Year: ${year}`}
          contentStyle={{ borderRadius: 8, border: "1px solid #e5e7eb" }}
        />
        <Line
          type="monotone"
          dataKey="teco"
          name={INFLATION_SECTION.legend.teco}
          stroke="#22c55e"
          strokeWidth={2}
          dot={{ fill: "#22c55e", stroke: "#fff", strokeWidth: 1.5, r: 4 }}
          connectNulls
        />
        <Line
          type="monotone"
          dataKey="duke"
          name={INFLATION_SECTION.legend.duke}
          stroke="#f97316"
          strokeWidth={2}
          dot={{ fill: "#f97316", stroke: "#fff", strokeWidth: 1.5, r: 4 }}
          connectNulls
        />
        <Line
          type="monotone"
          dataKey="floridaAvg"
          name={INFLATION_SECTION.legend.floridaAvg}
          stroke="#1a365d"
          strokeWidth={3}
          dot={{ fill: "#1a365d", stroke: "#fff", strokeWidth: 1.5, r: 4 }}
          connectNulls
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export function InflationRateIncreasesSection() {
  return (
    <div className="max-w-[60.2rem]">
      <p className="mb-2 text-right text-xs text-zinc-500">{INFLATION_SECTION.caption}</p>
      <div className="min-h-[320px] w-full">
        <InflationChart />
      </div>
      <div className="mt-4 flex flex-wrap items-center justify-end gap-6 border-t border-zinc-100 pt-4">
        <span className="flex items-center gap-2 text-sm">
          <span className="h-3 w-3 rounded-full bg-[#22c55e]" />
          {INFLATION_SECTION.legend.teco}
        </span>
        <span className="flex items-center gap-2 text-sm">
          <span className="h-3 w-3 rounded-full bg-[#f97316]" />
          {INFLATION_SECTION.legend.duke}
        </span>
        <span className="flex items-center gap-2 text-sm font-medium text-[#1a365d]">
          <span className="h-3 w-3 rounded-full bg-[#1a365d]" />
          {INFLATION_SECTION.legend.floridaAvg}
        </span>
      </div>
      <p className="mt-4 text-right text-xs text-zinc-500">
        {INFLATION_SECTION.sourceText} Sources:{" "}
        {INFLATION_SECTION.sources.map((s, i) => (
          <span key={s.url}>
            {i > 0 && "; "}
            <Link
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1a365d] underline hover:no-underline"
            >
              {s.name}
            </Link>
          </span>
        ))}
        .
      </p>
    </div>
  );
}
