"use client";

const QUESTIONS = [
  { label: "Roof", iconClass: "fi fi-rr-house-building" },
  { label: "Move", iconClass: "fi fi-rr-arrows" },
  { label: "Cost", iconClass: "fi fi-rr-coins" },
  { label: "Service", iconClass: "fi fi-rr-stars" },
  { label: "Savings", iconClass: "fi fi-rr-piggy-bank" },
];

export function FiveMainQuestionsSection() {
  return (
    <section className="min-h-[300px] py-12">
      <p className="mb-8 text-center text-3xl font-bold tracking-[0.35em] text-[#1a365d]">
        R.M.C.S.S.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-6">
        {QUESTIONS.map((q) => (
          <div
            key={q.label}
            className="flex flex-col items-center gap-3 rounded-2xl bg-[#1a365d] px-8 py-6 text-white"
          >
            <span
              className={`flex h-14 w-14 items-center justify-center rounded-full border-2 border-green-400 text-2xl text-white ${q.iconClass}`}
              aria-hidden
            />
            <span className="text-sm font-semibold">{q.label}</span>
          </div>
        ))}
      </div>

      
    </section>
  );
}
