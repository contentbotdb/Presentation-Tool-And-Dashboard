"use client";

const REASONS = [
  { title: "Save Money", iconClass: "fi fi-rr-hands-usd" },
  { title: "Save the Planet", iconClass: "fi fi-sr-globe" },
  { title: "Inflation Protection", iconClass: "fi fi-sr-chart-mixed-up-circle-dollar" },
];

const TESTIMONIALS = [
  {
    name: "Silas Umah",
    role: "Local Guide · 105 reviews · 3 photos",
    rating: 5,
    time: "3 weeks ago",
    new: true,
    content:
      "I switched internet provider and my system stopped transmitting power. David was informed about my case. He showed up in a timely manner. He communicated what he needed to do to get the system back to normalcy. He sent a reminder notice and he was very friendly, professional and knowledgeable. David is such an asset to Equity Solar Panel. He is highly recommended.",
  },
  {
    name: "Audilyn Heywood",
    role: "6 reviews · 8 photos",
    rating: 5,
    time: "a month ago",
    new: false,
    content:
      "The crew at Equity Solar are very efficient and prompt, always here when they're scheduled. It was quite easy to work with them. They keep in touch with me every step of the way and explained each and everything that is being done. Thank you.",
  },
  {
    name: "Ada Lis Luciano-Andújar",
    role: "3 reviews · 2 photos",
    rating: 5,
    time: "a week ago",
    new: true,
    content:
      "David showed up early and immediately started working. He is excellent at what he does and he is also knowledgeable about his work. He is a professional. He is a very nice guy, down to earth and pleasant. He was straight to the point in answering all our questions. We felt completely comfortable with him at home. I highly recommend Equity Solar and hope everyone gets the chance to have David do their inspection. It was worth it. David is worth more than 5 stars.",
  },
  {
    name: "Paul Baccas",
    role: "1 review · 3 photos",
    rating: 5,
    time: "2 months ago",
    new: false,
    content:
      "Thanks Ricardo. The water heater was set up perfect. We love the new solar system and glad we chose solar equity. You had nothing but excellent and professional service. We highly recommend everyone to get their solar done with you to save some money.",
  },
];

export function WhyGoSolarReasonsSection() {
  return (
    <div className="py-4">
      <div className="grid w-full items-stretch gap-0 lg:grid-cols-[1fr_2px_1fr]">
        <div className="pr-8 lg:pr-10">
          <h3 className="mb-4 text-xl font-bold text-[#1a365d]">Reasons </h3>
          <ul className="space-y-4">
            {REASONS.map((r, i) => (
              <li key={i} className="flex overflow-hidden rounded-4xl h-24  shadow-md">
                <span
                  className={`flex w-1/5 shrink-0 items-center justify-center text-2xl text-white bg-[#1a365d] ${r.iconClass}`}
                  aria-hidden
                />
                <span className="flex flex-1 items-center bg-white px-4 py-3.5 text-[1.2rem] font-semibold text-[#1a365d]">
                  {r.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden min-h-full bg-zinc-300 lg:block" aria-hidden />
        <div className="pl-8 lg:pl-10">
          <h3 className="mb-4 text-xl font-bold text-[#1a365d]">Testimonials</h3>
          <div className="space-y-6">
            {TESTIMONIALS.map((t) => (
              <blockquote
                key={t.name}
                className="py-2 pl-4 pr-2 bg-gray-100 rounded-xl"
              >
                <div className="mb-1 flex flex-wrap items-center gap-2">
                  <cite className="font-semibold not-italic text-[#1a365d]">{t.name}</cite>
                  <span className="text-xs text-zinc-500">{t.role}</span>
                  <span className="text-amber-500" aria-hidden>
                    {"★".repeat(t.rating)}
                  </span>
                  <span className="text-xs text-zinc-500">{t.time}</span>
                  {t.new && (
                    <span className="rounded bg-green-100 px-1.5 py-0.5 text-xs font-medium text-green-800">
                      NEW
                    </span>
                  )}
                </div>
                <p className="text-sm text-zinc-700">{t.content}</p>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
