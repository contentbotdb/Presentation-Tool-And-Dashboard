"use client";

const STEPS = [
  { time: "Today", label: "Select System", iconClass: "fi fi-rr-solar-panel", dark: false },
  { time: "Today", label: "Get Qualified", iconClass: "fi fi-rr-shield-check", dark: false },
  { time: "Today", label: "Success Checklist", iconClass: "fi fi-rr-list-check", dark: true },
  { time: "1-3 Days", label: "Site Audit", iconClass: "fi fi-rr-pencil-ruler", dark: false },
  { time: "2-5 Days", label: "Confirm Plans", iconClass: "fi fi-rr-gears", dark: false },
  { time: "1-8 Weeks", label: "Permitting", iconClass: "fi fi-rr-file-invoice", dark: false },
  { time: "1-3 Days", label: "Install", iconClass: "fi fi-rr-house-building", dark: false },
  { time: "Up to 2 Months", label: "Inspection", iconClass: "fi fi-rr-print-magnifying-glass", dark: false },
  { time: "Up to 2 Months", label: "Activation", iconClass: "fi fi-rr-plant-growth", dark: false },
  { time: "Forever", label: "Save Money", iconClass: "fi fi-rr-coin-up-arrow", dark: true },
];

export function NextStepsSection() {
  return (
    <section className="relative min-h-[300px] py-12">
      <div className="relative flex flex-wrap justify-between gap-y-8 gap-x-4 sm:flex-nowrap sm:justify-between sm:gap-x-0">
        <span
          className="absolute left-0 right-0 top-13 z-0 h-0.5 bg-zinc-300"
          aria-hidden
        />
        {STEPS.map((step, i) => (
          <div key={i} className="relative z-10 flex flex-1 min-w-0 flex-col items-center sm:flex-initial sm:min-w-0">
            <span className="mb-1 text-xs font-semibold text-zinc-600">{step.time}</span>
            <div
              className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-xl text-white ${
                step.dark ? "bg-[#1a365d]" : "bg-orange-400"
              }`}
            >
              <span className={step.iconClass} aria-hidden />
            </div>
            <span className="mt-2 max-w-20 text-center text-xs font-medium leading-tight text-[#1a365d]">
              {step.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
