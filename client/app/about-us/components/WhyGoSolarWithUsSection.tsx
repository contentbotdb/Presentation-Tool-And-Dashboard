"use client";

const POINTS = [
  {
    title: "We have done all the research for you",
    image: "/slide-images/10-plus-years.png",
    body: "In the modern world, we have too many choices and way too much information constantly bombarding us. How do you know what to choose? Imagine if you had a personal assistant that did all the research for you. Wouldn't that be just perfect? With over 10 years of experience and after helping thousands of homeowners upgrade to solar power, we are considered the trusted professionals to make the process of going solar simple and enjoyable.",
  },
  {
    title: "We believe in customer experience",
    image: "/slide-images/customer-experience.png",
    body: "We all know one of the most important things is extraordinary customer service. It is what we remember. Whether it's a vacation, a local night out at your favorite restaurant, or upgrading to the most efficient source of power available to you (solar), the service is what we remember. That is why we make this our #1 focus. Before, during and after we help you upgrade to solar we will be here for you relentlessly focused on providing you an amazing experience.",
  },
  {
    title: "We believe in quality",
    image: "/slide-images/quality.png",
    body: "Providing you the same quality we use ourselves. A quality installation will generate clean energy and bill savings for years to come. We are here to help ensure that your system does just that.",
  },
];

export function WhyGoSolarWithUsSection() {
  return (
    <div className="py-4">
      <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-stretch">
        <div className="space-y-8">
          {POINTS.map((p, i) => (
            <div key={i} className="flex gap-4">
              <div className="relative h-full min-h-0 shrink-0 basis-20">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.image}
                  alt=""
                  className="h-full min-h-0 w-full object-contain object-left"
                />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="mb-2 text-lg font-bold text-[#1a365d]">{p.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-700">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex h-full min-h-0 w-full justify-center lg:h-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/slide-images/why-go-solar.png"
            alt="Happy homeowners with solar panels and approved bill"
            className="h-[580px] max-w-full w-auto object-contain object-left"
          />
        </div>
      </div>
    </div>
  );
}
