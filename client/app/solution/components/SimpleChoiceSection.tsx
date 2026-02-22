"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  ReferenceLine,
  Area,
  ComposedChart,
} from "recharts";

// Conceptual cost over 25 years: Regular Bill (rising), Old Solar (moderate), Solar Redirection (flat/low)
const CHART_DATA = [
  { year: "1 yr.", regularBill: 32, oldSolar: 48, solarRedirection: 40 },
  { year: "5 yr.", regularBill: 52, oldSolar: 62, solarRedirection: 42 },
  { year: "10 yr.", regularBill: 88, oldSolar: 88, solarRedirection: 45 },
  { year: "15 yr.", regularBill: 135, oldSolar: 118, solarRedirection: 48 },
  { year: "20 yr.", regularBill: 198, oldSolar: 152, solarRedirection: 52 },
  { year: "25 yr.", regularBill: 275, oldSolar: 195, solarRedirection: 56 },
];

const LEGEND = [
  { key: "regularBill", label: "Regular Bill", color: "#dc2626" },
  { key: "oldSolar", label: "Old Solar", color: "#7dd3fc" },
  { key: "solarRedirection", label: "Solar Redirection", color: "#22c55e" },
];

export function SimpleChoiceSection() {
  return (
    <section>
      <div className="pb-4">
        <p className="">
          <span className="font-semibold text-green-600">Redirection program</span>
          <span className="ml-1 text-sm text-red-600">Fees + Surcharges</span>
        </p>
      </div>

      <div className="px-4 pb-2">
        <ResponsiveContainer width="100%" height={320}>
          <ComposedChart
            data={CHART_DATA}
            margin={{ top: 16, right: 80, bottom: 24, left: 8 }}
          >
            <defs>
              <linearGradient id="fillRegular" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#dc2626" stopOpacity={0.15} />
                <stop offset="100%" stopColor="#dc2626" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="fillOldSolar" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7dd3fc" stopOpacity={0.25} />
                <stop offset="100%" stopColor="#7dd3fc" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="fillSolarRedirection" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#22c55e" stopOpacity={0.2} />
                <stop offset="100%" stopColor="#22c55e" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="4 4" stroke="#e5e7eb" vertical={false} />
            <XAxis
              dataKey="year"
              tick={{ fill: "#525252", fontSize: 12 }}
              axisLine={{ stroke: "#d4d4d4" }}
              tickLine={false}
            />
            <YAxis
              domain={[0, 300]}
              tick={{ fill: "#525252", fontSize: 11 }}
              axisLine={{ stroke: "#d4d4d4" }}
              tickLine={false}
              tickFormatter={(v) => (v >= 1000 ? `${v / 1000}k` : String(v))}
            />
            <ReferenceLine x="20 yr." stroke="#94a3b8" strokeDasharray="2 2" />
            <Area
              type="monotone"
              dataKey="regularBill"
              fill="url(#fillRegular)"
              stroke="none"
            />
            <Area
              type="monotone"
              dataKey="oldSolar"
              fill="url(#fillOldSolar)"
              stroke="none"
            />
            <Area
              type="monotone"
              dataKey="solarRedirection"
              fill="url(#fillSolarRedirection)"
              stroke="none"
            />
            <Line
              type="monotone"
              dataKey="regularBill"
              name="Regular Bill"
              stroke="#dc2626"
              strokeWidth={2.5}
              dot={false}
              connectNulls
            />
            <Line
              type="monotone"
              dataKey="oldSolar"
              name="Old Solar"
              stroke="#7dd3fc"
              strokeWidth={2.5}
              dot={false}
              connectNulls
            />
            <Line
              type="monotone"
              dataKey="solarRedirection"
              name="Solar Redirection"
              stroke="#22c55e"
              strokeWidth={2.5}
              dot={false}
              connectNulls
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      <div className="flex flex-wrap items-center justify-end gap-6 px-6 pb-4">
        {LEGEND.map(({ key, label, color }) => (
          <span key={key} className="flex items-center gap-2 text-sm text-zinc-700">
            <span className="h-4 w-4 shrink-0 rounded-sm" style={{ backgroundColor: color }} />
            {label}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-4 px-6 pb-6">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-red-100 px-3 py-1.5 text-sm font-medium text-red-700">
          <span aria-hidden>$</span> Your Savings
        </span>
        <a
          href="#"
          className="inline-flex items-center gap-1.5 rounded-full border-2 border-[#1a365d] bg-white px-4 py-2 text-sm font-semibold text-[#1a365d] hover:bg-[#1a365d] hover:text-white"
        >
          Inflation Calculator
        </a>
        <a
          href="#"
          className="inline-flex items-center gap-1.5 rounded-full border-2 border-[#1a365d] bg-white px-4 py-2 text-sm font-semibold text-[#1a365d] hover:bg-[#1a365d] hover:text-white"
        >
          Cost of Doing Nothing
        </a>
        <span className="inline-flex items-center gap-1.5 rounded-lg bg-green-100 px-3 py-2 text-sm font-semibold text-green-800">
          <span aria-hidden>↓</span> Save Immediately
        </span>
      </div>

      <div className="flex items-center justify-end gap-2 px-24 py-3 text-shadow-blue-950">
        <span className="text-amber-400" aria-hidden>
          ★★★★★★
        </span>
        <span className="text-sm font-medium">BUILDING A CLEAN ENERGY ECONOMY</span>
      </div>
    </section>
  );
}
